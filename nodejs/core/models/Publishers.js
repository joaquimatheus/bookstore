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

class Publishers extends Model {
    async getNamesAndIds() {
        let data = await Publishers.findAll({ attributes: ['id', 'name'] })
        if (!data) { throw new Error('Error nothing of Authors was return') }

        const publishers = data.map((values) => {
            let dataValues = values.dataValues;

            return dataValues;
        })

        return publishers;
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
