require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.PSQL_DBNAME, 
    process.env.PSQL_USER, 
    process.env.PSQL_PASSWORD, {
        host: process.env.PSQL_HOST,
        dialect: 'postgres'
    }
)

class Categories extends Model {
    async getAllNamesAndIds() {
        let data = await Categories.findAll({ attributes: ['id', 'name'] })
        if (!data) { throw new Error(`Error nothing of Categories was return`)}

        const categories = data.map((values) => {
            let dataValues = values.dataValues;

            return dataValues;
        })

        return categories;
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

module.exports = Categories;
