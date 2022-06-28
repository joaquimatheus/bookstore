require('../../dotenv')
process.env.TZ = 'UTC';

const express = require('express');
const app = express();
const path = require('path');

const { HTTP_PORT_UI } = process.env;

app.use(express.static(path.resolve('../public')))

app.listen(HTTP_PORT_UI, () => {
    console.log(`Is running in ${HTTP_PORT_UI}`)
});
