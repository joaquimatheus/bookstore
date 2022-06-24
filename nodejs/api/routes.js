module.exports = function(app) {
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
