require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

const util = require('util')

class Languages extends Model {}

Languages.init({
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
    acronym: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'languages',
    timestamps: true
})

module.exports = Languages;
