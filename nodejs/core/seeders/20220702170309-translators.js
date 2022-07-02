"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('translators', [
            {
                name: 'Paulo Mendes Campos',
                description: 'Of course, one of the most important (if not the most important) Brazilian translators, having translated authors such as Jules Verne, Oscar Wilde, T. S. Eliot, James Joyce, Charles Dickens, C. S. Lewis, etc.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Haroldo de Campos',
                description: 'Translator, poet, critic and university professor has among his translations such as Goethe, Homer and Dante.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Edmo Suassuna',
                description: `A very prolific translator of the current publishing market, his works include translations of children's works such as the series Sr. Clever Courteous and Invasion of the Surface World;`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Augusto de Campos',
                description: `Poet and essayist, he is also among the main Brazilian translators, having translated works by authors such as James Joyce, E. E. Cummings, Ezra Pound, etc...`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Christian Schwartz',
                description: `One of the main names of the new generation of Brazilian translators, he has in his curriculum the translation of important contemporary authors such as Nick Hornby and Jeffrey Eugenides, among other names such as Philip Roth and F. Scott Fitzgerald...`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Raquel Zampil',
                description: `A tradutora brasileira também se destaca por ser a responsável pela tradução de obras de autores de grande sucesso de público no Brasil como John Green, Cressida Cowell, Collen Houck, entre outros, e também da série bestseller de Rick Riordan, Percy Jackson`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Alves Calado:',
                description: `Outro tradutor contemporâneo responsável pela tradução de importantes nomes como Bernard Cornwell, Eoin Colfer, Thomas Harris, etc... Pela Record é também o tradutor de O Diário de Anne Frank;`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Ana Ban',
                description: `Outra jovem prolífica tradutora brasileira tem um currículo com centena de traduções, que de certa forma se destaca por traduzir obra de autoras, como Meg Cabot, Helen Fielding, Richelle Mead, e também Virginia Woolf, entre outras...`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Andre Czarnobai',
                description: `Tradutor da Companhia das Letras, entre outras obras é responsável pela tradução dos livros de Lemony Snicket e E. Lockhart;`,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Daniel Pellizzari',
                description: `Outro importante nome da tradução brasileira vertendo para o português nomes como Neil Gaiman, David Foster Wallace, William S. Burrougs, entre outros.`,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('translators', null, {})
    },
};
