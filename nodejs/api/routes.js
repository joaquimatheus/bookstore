module.exports = function(app) {
    const _get = app.get;
    const _post = app.post;

    require('./endpoints/products')(app);

    app.get = _get;
    app.post = _post;
}
