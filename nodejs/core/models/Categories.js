require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

const util = require('util')

class Categories extends Model {}

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
