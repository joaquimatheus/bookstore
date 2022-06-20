const express = require('express');
const app = express()

require('../../dotenv.js');
process.env.TZ = 'UTC';

const {
    HTTP_PORT
} = process.env;

app.get('/', () => {
    res.sendFile(path.join())
})

app.listen(HTTP_PORT, () => {
    console.log(`Is running in ${HTTP_PORT}`)
});
