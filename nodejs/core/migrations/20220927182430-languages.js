module.exports = {
    async up (queryInterface, Sequelize) {
        queryInterface.createTable('languages', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: Sequelize.TEXT,
                allowNull: false,
                unique: true
            },
            acronym: {
                type: Sequelize.TEXT,
                unique: true,
                allowNull: false,
            }
        })
    },

    async down (queryInterface, Sequelize) {
        queryInterface.dropTable('languages')
    }
};
