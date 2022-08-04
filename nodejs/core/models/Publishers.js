require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Publishers extends Model {
    async getAllNamesAndIds() {
        try {
            let data = await Publishers.findAll({ attributes: ['id', 'name']})
            if (!data) { 
                throw new Error(`Error nothing of Categories was return`)
            }

            const publishers = data.map((values) => {
                let dataValues = values.dataValues;

                return dataValues;
            })

            return publishers;
        } catch(ex) {
            console.error(ex)
        }
    }

    async createResource(name, description) {
        try {
            const data = await Publishers.create({
                name, description
            })

            if(!data) {
                throw new Error('Error to create a new Publisher')
            }

            return data
        } catch (ex) {
            console.error(ex);
        }
    }

    async getAll() {
        let data = await Publishers.findAll();
        if (!data) { throw new Error(`Error! wasn't return all categories`)};

        const allPublishers = data.map((values) => {
            let dataValues = values.dataValues;
            return dataValues;
        })

        return allPublishers;
    }

    async delete(id) {
        try {
            let deleted = await Publishers.destroy({
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
            let updated = await Publishers.update(changes, { where: {id}});
            if(!updated) {throw new Error('Error updating publisher')};

            return updated;
        } catch(ex) {
            console.log(ex);
        }
    }
}

Publishers.init({
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
    modelName: 'publishers',
    timestamps: true
});

module.exports = Publishers;
