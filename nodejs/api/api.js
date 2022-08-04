require('../../dotenv');
const express = require('express');
const app = express();
const logger = require('../core/logger')

const { HTTP_PORT } = process.env

function fatalHandler(err) {
    logger.error(err, { FATAl: true });
    process.exit(1);
}

process.on('uncaughtException', fatalHandler);
process.on('unhandledRejection', fatalHandler);

app.use((req, res, next) => {
    const { ip, method, url, statusCode } = req

    const id = new Date().getTime()
    const msg = `[${ip} ${method} ${id}] - receiving {${url}}`

    logger.info(msg);

    res.on('close', () => {
        const start = new Date() - id;

        logger.info(`[${ip}] {${method}} ${id} - ]` +
            `closed: ${url} ${statusCode} ${start}ms`)
    });

    next();
})

require('./routes')(app);
app.listen(HTTP_PORT, () => {
    logger.info(`[api] is running in http://localhost:${HTTP_PORT}`);
}).on('error', fatalHandler);
