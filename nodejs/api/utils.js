const V = require('argument-validator');
const logger = require('../core/logger')

function throwValidationError(msg) {
    const error = new Error(msg);

    error.validationError = true;
    error.statusCode = 400;

    throw error;
}

function getUiMessageFromException(ex) {
    const message = ex.message || ex;
    
    if(ex.validationError || ex.statusCode) { return message; }

    if(/Validation error/.test(message)) {
        return 'duplicated. please, choose another'
    }

    return message;
}

const requestExtensions = {
    throwValidationError,

    boolean(key, obj) {
        V.string(key, 'key');

        const value = this.arg(key, obj);
        if (!value) { return false; }

        return true;
    },

    tryArg(key, obj) {
        V.string(key, 'key');

        if (obj) { return obj[key]; }

        for (const arg of [ 'params', 'query', 'body' ]) {
            const val = this[arg] ? this[arg][key] : undefined;

            if (val !== undefined ) { return val; }
        }
    },

    arg(key, obj) {
        V.string(key, 'key');

        const val = this.tryArg(key, obj);

        if (val === undefined) {
            throwValidationError(`${key} was not sent`)
        }

        return val;
    },

    number(key, obj) {
        V.string(key, 'key');

        const val = this.arg(key, obj);
        const n = Number(val);

        if (V.isNumber(n)) {
            return n;
        }

        throwValidationError(`${key} must be a number`);
    },

    string(key, obj) {
        V.string(key, 'key');

        const val = this.arg(key, obj);
        return String(val).trim();
    },

    array(key, obj) {
        V.string(key, 'key');
        const val = this.arg(key, obj);

        if (V.isArray(val)) {
            return val;
        }

        throwValidationError(`${key} must be an array`);
    },

    json(obj) {
        if (V.isObject(obj)) {
            return obj;
        }

        try {
            return JSON.parse(obj);
        } catch (error) {
            throwValidationError(`Error parsing ${obj} as JSON`)
        }
    }
}

function buildHandler(handler) {
    return async (req, res) => {
        try {
            for (const key in requestExtensions) {
                req[key] = requestExtensions[key].bind(req);
            }

            req.userInfo = { ip: req.ip, userAgent: req.get('user-agent') };
            req.userId = req.userId || (req.user && req.user.id);

            await handler(req, res);
        } catch (ex) {
            if (!ex.validationError && !ex.statusCode) {
                logger.error(ex);
            }

            const uiMessage = getUiMessageFromException(ex);
            const statusCode = ex.statusCode || 500;

            res.status(statusCode).json({
                error: statusCode === 500,
                validationError: statusCode === 400,
                message: uiMessage,
                redirectUrl: ex.redirectUrl
            });
        }
    }
}



module.exports = { buildHandler };
