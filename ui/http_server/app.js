require('../../dotenv')
process.env.TZ = 'UTC';

const express = require('express');
const app = express();
const path = require('path');

const { HTTP_PORT_UI } = process.env;

function allowCors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCors);

app.use(express.static(path.resolve('ui/public', '../public')))

app.listen(HTTP_PORT_UI, () => {
    console.log(`[ui] is running ${HTTP_PORT_UI} and the static files in ` +
    `${path.resolve('ui/public', '../public')}`)
});
