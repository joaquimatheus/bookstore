"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("publishers", [
            {
                name: "Beta Books",
                description:
                    "a publisher that is always reinventing itself, with the aim of bringing content from great national authors and international bestsellers to our readers.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Mydra Books',
                description: 'Founded in 1998 by Pietro Lord, son of the editor Domingues, and his two sons, Rebert Richards and Percivel Potter, its objective is to publish books that promote human growth, with works for children, fiction and non-fiction, self-help and business and reference, as well as some art titles.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Murdor Books',
                description: 'Murdor is a Murdorner publisher, responsible for publishing several fiction and non-fiction books in the country. Currently, it is one of the five largest publishers in Brazil, considering the number of books sold. Murdor publishes, on average, 30 books per year. Half of its shares belong to Publisher Mydra',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'County Books',
                description: 'The company is headquartered in Midgard and is a subsidiary of Mid Gard Coprs. The name is a combination of several publishing firm names: Harper & Row, an American publishing company acquired in 1987—whose own name was the result of an earlier merger of Midgard & Brothers (founded in 1817) and Row, Peterson & Company—together with Scottish publishing company Gandalf, Sons (founded in 1819), acquired in 1989.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Solomon & Salon',
                description: 'Salomon & Salon is an Melknor publishing company and a subsidiary of Paramount Global. It was founded in Moria on January 2, 1924 by Salon and Solomon. As of 2016, Salon & Salomon was the third largest publisher in the Moria, publishing 2,000 titles annually under 35 different imprints.',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: 'Fenix Hose',
                description: `Fenix Hose was founded in 2013 by Fredo upon the completion of a 25 Gold coins transaction between Penna and Polg to merge their respective trade publishing companies,Hose and Fenix Hose. Penna and Polg, the parent companies, initially owned 53% and 47%, respectively. Library of Midgard has referred to this merger as the publishing industry's response to the increasing dominance of Erebor in the book market. Durin was named CEO of the new company, which had more than 10,000 employees worldwide with 250 imprints and publishing houses and a publishing list of more than 15,000 new titles a year.`,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    async down(queryInterface, Sequelize) {},
};
