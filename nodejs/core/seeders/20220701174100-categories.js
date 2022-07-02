"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("categories", [
            {
                name: "Economics",
                description:
                    "Economics is the study of scarcity and its implications for the use of resources, production of goods and services, growth of production and welfare over time, and a great variety of other complex issues of vital concern to society.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Politics",
                description:
                    "Politics is the set of activities that are associated with making decisions in groups, or other forms of power relations among individuals, such as the distribution of resources or status. The branch of social science that studies politics and government is referred to as political science.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Philosophy",
                description: `Philosophy 'love of wisdom' is the systematized study of general and fundamental questions, such as those about existence, reason, knowledge, values, mind, and language. Such questions are often posed as problems to be studied or resolved. Some sources claim the term was coined by Pythagoras others dispute this story, arguing that Pythagoreans merely claimed use of a preexisting term. Philosophical methods include questioning, critical discussion, rational argument, and systematic presentation.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Mathematics",
                description:
                    "Mathematics is an area of knowledge that includes such topics as numbers (arithmetic, number theory) formulas and related structures shapes and the spaces in which they are contained (geometry), and quantities and their changes (calculus and analysis).",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Geopolitics",
                description: `is the study of the effects of Earth's geography (human and physical) on politics and international relations.While geopolitics usually refers to countries and relations between them, it may also focus on two other kinds of states: de facto independent states with limited international recognition and relations between sub-national geopolitical entities, such as the federated states that make up a federation, confederation or a quasi-federal system.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Physics",
                description: `is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force. Physics is one of the most fundamental scientific disciplines, with its main goal being to understand how the universe behaves.A scientist who specializes in the field of physics is called a physicist`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Astronomy",
                description: `'science that studies the laws of the stars') is a natural science that studies celestial objects and phenomena. It uses mathematics, physics, and chemistry in order to explain their origin and evolution. Objects of interest include planets, moons, stars, nebulae, galaxies, and comets. Relevant phenomena include supernova explosions, gamma ray bursts, quasars, blazars, pulsars, and cosmic microwave background radiation. More generally, astronomy studies everything that originates beyond Earth's atmosphere. Cosmology is a branch of astronomy that studies the universe as a whole.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "History",
                description: `History (from Ancient Greek: ἱστορία, romanized: historíā, lit. 'inquiry; knowledge acquired by investigation') is the study and the documentation of the past. Events before the invention of writing systems are considered prehistory. "History" is an umbrella term comprising past events as well as the memory, discovery, collection, organization, presentation, and interpretation of these events. Historians seek knowledge of the past using historical sources such as written documents, oral accounts, art and material artifacts, and ecological markers`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Programming",
                description: `Computer programming is the process of performing a particular computation (or more generally, accomplishing a specific computing result), usually by designing and building an executable computer program. Programming involves tasks such as analysis, generating algorithms, profiling algorithms' accuracy and resource consumption, and the implementation of algorithms (usually in a chosen programming language, commonly referred to as coding).The source code of a program is written in one or more languages that are intelligible to programmers, rather than machine code, which is directly executed by the central processing unit. The purpose of programming is to find a sequence of instructions that will automate the performance of a task (which can be as complex as an operating system) on a computer, often for solving a given problem. Proficient programming thus usually requires expertise in several different subjects, including knowledge of the application domain, specialized algorithms, and formal logic.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("categories", null, {});
    },
};
