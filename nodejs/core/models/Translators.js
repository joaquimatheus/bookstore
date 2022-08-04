require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Translators extends Model {
    async createResource(name, description) {
        try {
            const data = await Translators.create({
                name, description
            })

            if(!data) {
                throw new Error('Error to create a new Translator')
            }

            return data
        } catch (ex) {
            console.error(ex);
        }
    }

    async getAllNamesAndIds() {
        try {
            let data = await Translators.findAll({ attributes: ['id', 'name']})
            if (!data) { 
                throw new Error(`Error nothing of Categories was return`)
            }

            const translators = data.map((values) => {
                let dataValues = values.dataValues;

                return dataValues;
            })

            return translators;
        } catch(ex) {
            console.error(ex)
        }
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

    async delete(id) {
        try {
            let deleted = await Translators.destroy({
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
            let updated = await Translators.update(changes, { where: {id}});
            if(!updated) {throw new Error('Error updating translator')};

            return updated;
        } catch(ex) {
            console.log(ex);
        }
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
