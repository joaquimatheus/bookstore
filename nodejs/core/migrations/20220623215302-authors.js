'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.createTable('authors', {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true
          },
          name: {
              type: Sequelize.TEXT,
              allowNull: false,
              unique: true
          },
          description: {
              type: Sequelize.TEXT,
              allowNull: false
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
      queryInterface.dropTable('authors');
  }
};
