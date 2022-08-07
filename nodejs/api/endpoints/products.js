const bodyParser = require('body-parser');
const Categories = require('../../core/models/Categories');
const Translators = require('../../core/models/Translators');
const Authors = require('../../core/models/Authors');
const Publishers = require('../../core/models/Publishers');
const Products = require('../../core/models/Products');

const { buildHandler } = require('../utils');

module.exports = function(app) {
    app.post('/api/v1/categories', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body) 
            
            const name = req.string('name');
            const description = req.string('description');

            const category = await Categories.create({name, description});

            if(category) {
                return res.status(201).json({
                    type: 'categories',
                    categoryId: category.id,
                    msg: "created successfully"
                })
            }
    }));

    app.post('/api/v1/translators', 
        bodyParser.json(),
        buildHandler(async function(req, res) {
            req.json(req.body);

            const name = req.string('name');
            const description = req.string('description');

            const translator = await Translators.create({name, description});

            if(translator) {
                return res.status(201).json({
                    type: 'translators',
                    translatorId: translator.id,
                    msg: "created successfully"
                });
            }
        }));

    app.post('/api/v1/authors', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body);

            const name = req.string('name');
            const description = req.string('description');

            const author = await Authors.create({ name, description })

            if(author) {
                return res.status(201).json({
                    type: 'authors',
                    authorId: author.id,
                    msg: "created successfully"
                });
            }
        }));

    app.post('/api/v1/publishers', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body);

            const name = req.string('name');
            const description = req.string('description');

            const publisher = await Publishers.create({ name, description })

            if(publisher) {
                return res.status(201).json({
                    type: 'authors',
                    authorId: publisher.id,
                    msg: "created successfully"
                });
            }
        }));

    app.post('/api/v1/products', 
        bodyParser.json(),
        buildHandler(async function(req, res) {
            /*
            const { name, description, category_id, author_id, translator_id, 
                publishers_id, pages, language, price, link, 
                isbn13, isbn10} = req.body;
            */

            req.json(req.body);

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
    ))

    app.get('/api/v1/categories', 
        buildHandler(async function(req, res) {
            const categories = await Categories.findAll();

            if(categories) {
                res.status(200).json({
                    type: 'categories',
                    data: categories
                });
            }    
        })
    )

    app.get('/api/v1/authors',
        buildHandler(async function(req, res) {
            const authors = await Authors.findAll();

            if(authors) {
                res.status(200).json({
                    type: 'authors',
                    data: authors
                });
            }
        })
    )

    app.get('/api/v1/publishers', 
        buildHandler(async function(req, res) {
            const publishers = await Publishers.findAll()

            if(publishers) {
                res.status(200).json({
                    type: 'publishers',
                    data: publishers                
                })
            }
        })
    )

    app.get('/api/v1/translators', 
        buildHandler(async function(req, res) {
            const translators = await Translators.findAll()

            if(translators) {
                res.status(200).json({
                    type: 'translators',
                    data: translators
                });
            }
        })
    )

    app.get('/api/v1/categories/shorthand', 
        buildHandler(async function(req, res) {
            const categories = 
                await Categories.findAll({
                    attributes: ['id', 'name']
                })

            if (categories) {
                res.status(200).json({
                    type: 'categories',
                    data: categories 
                })
            }
        })
    )

    app.get('/api/v1/publishers/shorthand',
        buildHandler(async function(req, res) {
            const publishers = 
                await Publishers.findAll({
                    attributes: ['id', 'name']
                });

            if (publishers) {
                res.status(200).json({
                    type: 'publishers',
                    data: publishers
                })
            }
        })
    )

    app.get('/api/v1/translators/shorthand',
        buildHandler(async function(req, res) {
            const translators = await Translators.findAll({
                attributes: ['id', 'name']
            });

            if (translators) {
                res.status(200).json({
                    type: 'translators',
                    data: translators
                })
            }
        })
    )

    app.get('/api/v1/authors/shorthand', 
        buildHandler(async function(req, res) {
            const author = await Authors.findAll({
                attributes: ['id', 'name']
            });

            if (author) {
                res.status(200).json({
                    type: 'authors',
                    data: author
                })
            }
        })
    )

    app.delete('/api/v1/categories/:id', 
        buildHandler(async function(req, res) {
            const id = req.string('id');

            const category = await Categories.destroy({
                where: { id }
            })

            if (category) {
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
        })
    )

    app.delete('/api/v1/authors/:id',
        buildHandler(async function(req, res) {
            const id = req.string('id')

            const authors = await Authors.destroy({
                where: { id }
            });

            if (authors) {
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
    )

    app.delete('/api/v1/translators/:id', 
        buildHandler(async function(req, res) {
            const id = req.string('id')

            const translators = Translators.destroy({
                where: { id }
            })

            if (translators) {
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
    )

    app.delete('/api/v1/publishers/:id', 
        buildHandler(async function(req, res) {
            const id = req.string('id');

            const publisher = await Publishers.destroy({
                where: { id }
            });

            if (publisher) {
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
    )

    app.put('/api/v1/categories/:id', 
        bodyParser.json(),
        buildHandler(async function(req, res) {
            req.json(req.body)

            const id = req.string('id');
            const changes = req.arg('changes');

            const category = Categories.update(changes, { where: {id} }) ;

            if(category) {
                res.status(200).json({
                    type: 'categories',
                    categoryId: id,
                    msg: 'The category is updated'
                })
            } 
        })
    )

    app.put('/api/v1/publishers/:id', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body)

            const id = req.string('id');
            const changes = req.arg('changes');

            const publisher = Publishers.update(changes, { where: {id}});

            if (publisher) {
                res.status(200).json({
                    type: 'publishers',
                    publisherId: id,
                    msg: 'The publisher updated'
                })
            }
        })
    )

    app.put('/api/v1/authors/:id', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body);

            const id = req.string('id');
            const changes = req.arg('changes');

            const author = Authors.update(changes, { where: { id }});

            if (author) {
                res.status(200).json({
                    type: 'authors',
                    authorId: id,
                    msg: 'The authors updated'
                })
            }
        })
    )

    app.put('/api/v1/translators/:id', 
        bodyParser.json(), 
        buildHandler(async function(req, res) {
            req.json(req.body);

            const id = req.string('id');
            const changes = req.arg('changes');

            const translators = Translators.update(changes, { where: {id}});

            if (translators) {
                res.status(200).json({
                    type: 'translator',
                    translatorId: id,
                    msg: 'The translator updated'
                })
            }
        })
    )
}
