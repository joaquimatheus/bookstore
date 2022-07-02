"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("publishers", [
            {
                name: "Beta Books",
                description:
                    "a publisher that is always reinventing itself, with the aim of bringing content from great national authors and international bestsellers to our readers.",
            },
            {

            },
        ]);
    },

    async down(queryInterface, Sequelize) {},
};
