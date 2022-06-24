const bodyParser = require('body-parser');
const Categories = require('../../core/models/Categories');
const Translators = require('../../core/models/Translators');
const Authors = require('../../core/models/Authors');

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
            });

            if(categorie) {
                return res.status(200).json({
                    msg: "Category created successfully"
                })
            }
    });

    app.post('/translators', 
        bodyParser.json(),
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    msg: 'Missing parameters'
                });
            }

            const translator = await Authors.create({
                name,
                description
            });

            if(translator) {
                return res.status(400).json({
                    msg: "Translators created successfully"
                });
            }
        });

    app.post('authors', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    msg: 'Missing parameters'
                });
            }

            const author = await Authors.create({
                name,
                description
            });

            if(author) {
                return res.status(400).json({
                    msg: "Authors created successfully"
                });
            }
        })
}
