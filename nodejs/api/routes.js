const logger = require('../core/logger');

function allowCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.UI_ORIGIN);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if(req.method === 'OPTIONS') { return res.sendStatus(200); }
    next();
}

module.exports = function(app) {
    app.use(allowCors);

    const _get = app.get;
    const _post = app.post;
    const _delete = app.delete;
    const _put = app.put;

    app.post = function(route) {
        logger.info(`Binding route: {POST} ${route}`)
        return _post.apply(this, arguments);
    };

    app.get = function(route) {
        logger.info(`Binding route: {GET} ${route}`)
        return _get.apply(this, arguments);
    };

    app.delete = function(route) {
        logger.info(`Binding route: {DELETE} ${route}`);
        return _delete.apply(this, arguments);
    }

    app.put = function(route) {
        logger.info(`Binding route: {PUT} ${route}`)
        return _put.apply(this, arguments);
    }

    require('./endpoints/products-management.js')(app);

    app.get = _get;
    app.post = _post;
    app.delete = _delete;
    app.patch = _put;
}
