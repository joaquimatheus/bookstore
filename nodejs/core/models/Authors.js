require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Authors extends Model {}

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
