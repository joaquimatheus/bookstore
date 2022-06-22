const bodyParser = require('body-parser');
const Categories = require('../../db/models/Categories')

module.exports = function(app) {
    app.post('/categories', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    msg: 'Missing parameters'
                });
            }

            const categorie = await Categories.create({
                name,
                description
            })
    });
}
