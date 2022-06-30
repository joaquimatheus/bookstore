require('../../dotenv');
const express = require('express');
const app = express();

const { HTTP_PORT } = process.env

function fatalHandler(err) {
    console.error(err, { FATAl: true });
    process.exit(1);
}

process.on('uncaughtException', fatalHandler);
process.on('unhandledRejection', fatalHandler);

app.use((req, res, next) => {
    const { ip, method, url, statusCode } = req

    const id = new Date().getTime()
    const msg = `[${ip} ${method} ${id}] - receiving {${url}}`

    console.log(msg);

    res.on('close', () => {
        const start = new Date() - id;

        console.log(`[${ip}] {${method}} ${id} - ]` +
            `closed: ${url} ${statusCode} ${start}ms`)
    });

    next();
})

require('./routes')(app);
app.listen(HTTP_PORT, () => {

    console.log(`[api] is running in http://localhost:${HTTP_PORT}`);

}).on('error', fatalHandler);
