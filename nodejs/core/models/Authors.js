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

class Authors extends Model {
    async getAllNamesAndIds() {
        try {
            let data = await Authors.findAll({ attributes: ['id', 'name']})
            if (!data) { 
                throw new Error(`Error nothing of Categories was return`)
            }

            const authors = data.map((values) => {
                let dataValues = values.dataValues;

                return dataValues;
            })

            return authors;
        } catch(ex) {
            console.error(ex)
        }
    }

    async getAll() {
        let data = await Authors.findAll()
        if (!data) { throw new Error(`Error! wasn't return Authors`) }

        const allAuthors = data.map((values) => {
            let dataValues = values.dataValues;
            return dataValues;
        })

        return allAuthors;
    }

    async delete(id) {
        try {
            let deleted = await Authors.destroy({
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

Authors.init({
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
    modelName: 'authors',
    timestamps: true
});

module.exports = Authors;
