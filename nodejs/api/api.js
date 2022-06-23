const express = require('express');
const app = express();

require('./routes')(app);
app.listen(3333, () => {
    console.log('Is running ya');
})
