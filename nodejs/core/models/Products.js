require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Products extends Model {}

Products.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    category_id: {
        type: DataTypes.TEXT,
        references: {
            model: 'categories',
            key: 'id'
        }
    },
    author_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'authors',
          key: 'id'
      }
    },
    translator_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'translators',
          key: 'id'
      }
    },
    publisher_id: {
      type: Sequelize.INTEGER,
      references: {
          model: 'publishers',
          key: 'id'
      }
    },
    pages: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    language: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    link: {
        type: Sequelize.TEXT,
        unique: true,
    },
    isbn13: {
        type: Sequelize.BIGINT,
        unique: true,
    },
    isbn10: {
        type: Sequelize.BIGINT,
        unique: true,
    },
}, {
    sequelize,
    modelName: 'products',
    timestamps: true
});

module.exports = Products
