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

class Translators extends Model {
    async getAllNamesAndIds() {
        let data = await Translators.findAll({ attributes: ['id', 'name'] })
        if (!data) { throw new Error('Error nothing of Authors was return') }

        const translators = data.map((values) => {
            let dataValues = values.dataValues;

            return dataValues;
        })

        return translators;
    }

    async getAll() {
        let data = await Translators.findAll()
        if (!data) { throw new Error(`Error! wasn't return Translators`) }

        const allTranslators = data.map((values) => {
            let dataValues = values.dataValues;
            return dataValues;
        })

        return allTranslators;
    }
}

Translators.init({
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
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'translators',
    timestamps: true
});

module.exports = Translators;
