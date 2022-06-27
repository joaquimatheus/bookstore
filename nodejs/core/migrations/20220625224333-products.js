'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.createTable('products', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          name: {
              type: Sequelize.TEXT,
              allowNull: false
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: false,
          },
          category_id: {
              type: Sequelize.INTEGER,
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
          createdAt: {
              type: Sequelize.DATE
          },
          updatedAt: {
              type: Sequelize.DATE
          }
      })
  },

  async down (queryInterface, Sequelize) {
      queryInterface.dropTable('products')
  }
};
