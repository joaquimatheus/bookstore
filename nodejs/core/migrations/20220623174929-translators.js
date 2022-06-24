'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      queryInterface.createTable('translators', {
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
      queryInterface.dropTable('translators')
  }
};
