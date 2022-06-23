'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('categories', {
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
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('categories');
    }
};
