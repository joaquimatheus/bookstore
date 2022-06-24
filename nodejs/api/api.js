const express = require('express');
const app = express();

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
app.listen(3333, () => {
    console.log('Is running ya');
})
