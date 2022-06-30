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

    app.post = function(route) {
        console.log(`Binding route: {POST} ${route}`)
        return _post.apply(this, arguments);
    };

    app.get = function(route) {
        console.log(`Binding route: {GET} ${route}`)
        return _get.apply(this, arguments);
    };

    require('./endpoints/products')(app);

    app.get = _get;
    app.post = _post;
}
