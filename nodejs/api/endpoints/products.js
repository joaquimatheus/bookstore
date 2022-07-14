const bodyParser = require('body-parser');
const Categories = require('../../core/models/Categories');
const Translators = require('../../core/models/Translators');
const Authors = require('../../core/models/Authors');
const Publishers = require('../../core/models/Publishers');
const Products = require('../../core/models/Products');

module.exports = function(app) {
    app.post('/create/categories', 
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

    app.post('/create/Translators', 
        bodyParser.json(),
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    msg: 'Missing parameters'
                });
            }

            const translator = await Translators.create({
                name,
                description
            });

            if(translator) {
                return res.status(200).json({
                    msg: "Translators created successfully"
                });
            }
        });

    app.post('/create/authors', 
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
                return res.status(200).json({
                    msg: "Authors created successfully"
                });
            }
        });

    app.post('/create/publishers', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body

            if(!name || !description) {
                return res.status(400).json({
                    msg: 'Missing parameters'
                });
            }

            const publisher = await Publishers.create({
                name,
                description
            });

            if(publisher) {
                return res.status(200).json({
                    msg: "Authors created successfully"
                });
            }
        })

    app.post('/create/products', 
        bodyParser.json(),
        async function(req, res) {
            /*
            const { name, description, category_id, author_id, translator_id, 
                publishers_id, pages, language, price, link, 
                isbn13, isbn10} = req.body;
            */

            const productObj = req.body;
            console.log(productObj);

            const product = await Products.create({
                name: productObj.name,
                description: productObj.description,
                category_id: productObj.category_id,
                author_id: productObj.author_id,
                translator_id: productObj.translator_id,
                publisher_id: productObj.publisher_id,
                pages: productObj.pages,
                language: productObj.pages,
                price: productObj.price,
                link: productObj.link,
                isbn13: productObj.isbn13,
                isbn10: productObj.isbn10
            });

            if(product) {
                res.status(200).json({
                    msg: "Products created successfully"
                })
            }
        }
    )

    app.get('/get/categories', 
        bodyParser.json(), 
        async function(req, res) {
            const categories = new Categories();
            const catgNamesAndIds = await categories.getNamesAndIds();

            if(catgNamesAndIds) {
                res.status(200).json({
                    data: catgNamesAndIds
                });
            }    
        }
    )

    app.get('/get/authors',
        bodyParser.json(),
        async function(req, res) {
            const authors = new Authors()
            const authNamesAndIds = await authors.getNamesAndIds();

            if(authNamesAndIds) {
                res.status(200).json({
                    data: authNamesAndIds
                });
            }
        }
    )

    app.get('/get/publishers', 
        bodyParser.json(), 
        async function(req, res) {
            const publishers = new Publishers();
            const publNamesAndIds = await publishers.getNamesAndIds()

            if(publNamesAndIds) {
                res.status(200).json({
                    data: publNamesAndIds
                })
            }
        }
    )

    app.get('/get/translators', 
        bodyParser.json(), 
        async function(req, res) {
            const translators = new Translators()
            const translNamesAndIds = await translators.getNamesAndIds()

            if(translNamesAndIds) {
                res.status(200).json({
                    data: translNamesAndIds
                });
            }
        }
    )
}
