'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('languages', [
            {
                name: 'Portuguese',
                acronym: 'pt-br' 
            },
            {
                name: 'English',
                acronym: 'en'
            }
        ])
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('languages', null, {})
    }
};
