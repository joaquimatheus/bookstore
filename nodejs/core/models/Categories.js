require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Categories extends Model {
    async getAllNamesAndIds() {
        try {
            let data = await Categories.findAll({ attributes: ['id', 'name']})
            if (!data) { 
                throw new Error(`Error nothing of Categories was return`)
            }

            const categories = data.map((values) => {
                let dataValues = values.dataValues;

                return dataValues;
            })

            return categories;
        } catch(ex) {
            console.error(ex)
        }
    }

    async createResource(name, description) {
        try {
            const data = await Categories.create({
                name, description
            })

            if(!data) {
                throw new Error('Error to create a new Category')
            }

            return data
        } catch (ex) {
            console.error(ex);
        }
    }

    async getAll() {
        let data = await Categories.findAll();
        if (!data) { throw new Error('Error! not was return all Categories') }

        const allCategories = data.map((values) => {
            let dataValues = values.dataValues;
            return dataValues;
        })

        return allCategories;
    }

    async delete(id) {
        try {
            let deleted = await Categories.destroy({
                where: {
                    id
                }
            })

            return deleted;
        } catch(ex) {
            console.log(ex)
        }

        return deleted;
    }

    async update(id, changes) {
        try {
            let updated = await Categories.update(changes, { where: {id} })
            if(!updated) { throw new Error('Error updating category') }
            
            return updated;
        } catch(ex) {
            console.log(ex)
        }
    }
}

Categories.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNul: false,
    },
}, {
    sequelize,
    modelName: 'categories',
    timestamps: true
});

(async() => {
    const categories = new Categories();
    console.log(await categories.getAll());
})();

module.exports = Categories;
