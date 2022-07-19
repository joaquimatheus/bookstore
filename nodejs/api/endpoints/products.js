const bodyParser = require('body-parser');
const Categories = require('../../core/models/Categories');
const Translators = require('../../core/models/Translators');
const Authors = require('../../core/models/Authors');
const Publishers = require('../../core/models/Publishers');
const Products = require('../../core/models/Products');

module.exports = function(app) {
    app.post('/api/v1/categories', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    type: 'error',
                    msg: 'Missing parameters'
                });
            }

            const categorie = await Categories.create({
                name,
                description
            });

            if(categorie) {
                return res.status(201).json({
                    type: 'categories',
                    msg: "created successfully"
                })
            }
    });

    app.post('/api/v1/translators', 
        bodyParser.json(),
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    type: 'error',
                    msg: 'Missing parameters'
                });
            }

            const translator = await Translators.create({
                name,
                description
            });

            if(translator) {
                return res.status(201).json({
                    type: 'translators',
                    msg: "created successfully"
                });
            }
        });

    app.post('/api/v1/authors', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body;

            if (!name || !description) {
                return res.status(400).json({
                    type: 'error',
                    msg: 'Missing parameters'
                });
            }

            const author = await Authors.create({
                name,
                description
            });

            if(author) {
                return res.status(201).json({
                    type: 'authors',
                    msg: "created successfully"
                });
            }
        });

    app.post('/api/v1/publishers', 
        bodyParser.json(), 
        async function(req, res) {
            const { name, description } = req.body

            if(!name || !description) {
                return res.status(400).json({
                    type: 'error',
                    msg: 'Missing parameters'
                });
            }

            const publisher = await Publishers.create({
                name,
                description
            });

            if(publisher) {
                return res.status(201).json({
                    type: 'publishers',
                    msg: "Authors created successfully"
                });
            }
        })

    app.post('/api/v1/products', 
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
                res.status(201).json({
                    type: 'products',
                    msg: "created successfully"
                })
            }
        }
    )

    app.get('/api/v1/categories', 
        bodyParser.json(), 
        async function(req, res) {
            const categories = new Categories();
            const catgNamesAndIds = await categories.getAll();

            if(catgNamesAndIds) {
                res.status(200).json({
                    type: 'categories',
                    data: catgNamesAndIds
                });
            }    
        }
    )

    app.get('/api/v1/authors',
        bodyParser.json(),
        async function(req, res) {
            const authors = new Authors()
            const authNamesAndIds = await authors.getAll();

            if(authNamesAndIds) {
                res.status(200).json({
                    type: 'authors',
                    data: authNamesAndIds
                });
            }
        }
    )

    app.get('/api/v1/publishers', 
        bodyParser.json(), 
        async function(req, res) {
            const publishers = new Publishers();
            const publNamesAndIds = await publishers.getAll()

            if(publNamesAndIds) {
                res.status(200).json({
                    type: 'publishers',
                    data: publNamesAndIds
                })
            }
        }
    )

    app.get('/api/v1/translators', 
        bodyParser.json(), 
        async function(req, res) {
            const translators = new Translators()
            const translNamesAndIds = await translators.getAll()

            if(translNamesAndIds) {
                res.status(200).json({
                    type: 'translators',
                    data: translNamesAndIds
                });
            }
        }
    )

    app.get('/api/v1/categories/shorthand', 
        async function(req, res) {
            const categories = new Categories();
            const allCatgNamesAndIds = await categories.getAllNamesAndIds()

            if (allCatgNamesAndIds) {
                res.status(200).json({
                    type: 'categories',
                    data: allCatgNamesAndIds
                })
            }
        }
    )

    app.get('/api/v1/publishers/shorthand',
        async function(req, res) {
            const publishers = new Publishers();
            const allPublisNamesAndIds = await publishers.getAllNamesAndIds();

            if (allPublisNamesAndIds) {
                res.status(200).json({
                    type: 'publishers',
                    data: allPublisNamesAndIds
                })
            }
        }
    )

    app.get('/api/v1/translators/shorthand',
        async function(req, res) {
            const translators = new Translators();
            const allTranslNamesAndIds = await translators.getAllNamesAndIds()

            if (allTranslNamesAndIds) {
                res.status(200).json({
                    type: 'translators',
                    data: allTranslNamesAndIds
                })
            }
        })

    app.get('/api/v1/authors/shorthand', 
        async function(req, res) {
            const authors = new Authors();
            const allAuthorsNamesAndIds = await authors.getAllNamesAndIds()

            if (allAuthorsNamesAndIds) {
                res.status(200).json({
                    type: 'authors',
                    data: allAuthorsNamesAndIds
                })
            }
        })

    app.delete('/api/v1/categories/:id', 
        bodyParser.json(),
        async function(req, res) {
            const { id } = req.params;
            const category = new Categories();
            const deletedCateg = await category.delete(id); 

            if (deletedCateg) {
                res.status(200).json({
                    type: 'categories',
                    categoryId: id,
                    msg: 'Category has been deleted'
                })
            } else {
                res.status(404).json({
                    type: 'Not found',
                    categoryId: id,
                    msg: `Category ins't exist`
                })
            }
        }
    )

    app.delete('/api/v1/authors/:id',
        bodyParser.json(),
        async function(req, res) {
            const { id } = req.params;

            const author = new Authors;
            const deletedAuthor = await author.delete(id);

            if (deletedAuthor) {
                res.status(200).json({
                    type: 'author',
                    authorId: id,
                    msg: 'The author has been deleted'
                })
            } else {
                res.status(404).json({
                    type: 'Not found',
                    authorId: id,
                    msg: `The category isn't exist`
                })
            }
        })

    app.delete('/api/v1/translators/:id', 
        bodyParser.json(), 
        async function(req, res) {
            const { id } = req.params;

            const translator = new Translators();
            const deletedTranslator = await translator.delete(id);

            if (deletedTranslator) {
                res.status(200).json({
                    type: 'translator',
                    translatorID: id,
                    msg: 'The Translator has been deleted'
                })
            } else {
                res.status(404).json({
                    type: 'Not found',
                    translatorID: id,
                    msg: `The translator insn't exists`
                })
            }
    })

    app.delete('/api/v1/publishers/:id', 
        bodyParser.json(), 
        async function(req, res) {
            const { id } = req.params;

            const publisher = new Publishers();
            const deletedPublisher = await publisher.delete(id);

            if (deletedPublisher) {
                res.status(200).json({
                    type: 'publishers',
                    publisherId: id,
                    msg: `The publisher has been deleted`
                })
            } else {
                res.status(404).json({
                    type: 'Not found',
                    publisherId: id,
                    msg: `The publish isn't exists`
                })
            }
        })
}
