"use strict";

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("authors", [
            {
                name: "Plato",
                description: `Plato was a Greek philosopher born in Athens during the Classical period in Ancient Greece. He founded the Platonist school of thought and the Academy, the first institution of higher learning in the Western world.Plato is widely considered a pivotal figure in the history of Ancient Greek and Western philosophy, along with his teacher, Socrates, and his most famous student, Aristotle.He has often been cited as one of the founders of Western religion and spirituality. The so-called neoplatonism of philosophers, such as Plotinus and Porphyry, greatly influenced Christianity through Church Fathers such as Augustine. Alfred North Whitehead once noted: "the safest general characterization of the European philosophical tradition is that it consists of a series of footnotes to Plato.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Socrates",
                description:
                    "Socrates was a Greek philosopher from Athens who is credited as the founder of Western philosophy and among the first moral philosophers of the ethical tradition of thought.[2] An enigmatic figure, Socrates authored no texts and is known mainly through the posthumous accounts of classical writers, particularly his students Plato and Xenophon. These accounts are written as dialogues, in which Socrates and his interlocutors examine a subject in the style of question and answer; they gave rise to the Socratic dialogue literary genre. Contradictory accounts of Socrates make a reconstruction of his philosophy nearly impossible, a situation known as the Socratic problem. Socrates was a polarizing figure in Athenian society. In 399 BC, he was accused of impiety and corrupting the youth. After a trial that lasted a day, he was sentenced to death. He spent his last day in prison, refusing offers to help him escape.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Friedrich Nietzsche",
                description: `Friedrich Nietzsche was a German philosopher, cultural critic and philologist whose work has exerted a profound influence on modern intellectual history. He began his career as a classical philologist before turning to philosophy. He became the youngest person ever to hold the Chair of Classical Philology at the University of Basel in 1869 at the age of 24. Nietzsche resigned in 1879 due to health problems that plagued him most of his life; he completed much of his core writing in the following decade. In 1889, at age 45, he suffered a collapse and afterward a complete loss of his mental faculties, with paralysis and probably vascular dementia. He lived his remaining years in the care of his mother until her death in 1897 and then with his sister Elisabeth Förster-Nietzsche. Nietzsche died in 1900, after many strokes and pneumonia.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Ludwing Von Mises",
                description: `Ludwig Heinrich Edler von Mises was an Austrian School economist, historian, logician, and sociologist. Mises wrote and lectured extensively on the societal contributions of classical liberalism. He is best known for his work on praxeology studies comparing communism and capitalism. He is considered one of the most influential economic and political thinkers of the 20th century. Mises emigrated from Austria to the United States in 1940. Since the mid-20th century, libertarian movements have been strongly influenced by Mises's writings. Mises' student Friedrich Hayek viewed Mises as one of the major figures in the revival of classical liberalism in the post-war era. Hayek's work "The Transmission of the Ideals of Freedom" (1951) pays high tribute to the influence of Mises in the 20th century libertarian movement.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Friedrich Hayek",
                description: `Friedrich August von Hayek often referred to by his initials F. A. Hayek, was an Austrian economist, legal theorist and philosopher who is best known for his defense of classical liberalism. Hayek shared the 1974 Nobel Memorial Prize in Economic Sciences with Gunnar Myrdal for their work on money and economic fluctuations, and the interdependence of economic, social and institutional phenomena. His account of how changing prices communicate information that helps individuals coordinate their plans is widely regarded as an important achievement in economics, leading to his prize`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Thomas Sowell",
                description: `Thomas Sowell is an American economist, historian, social theorist, and senior fellow at Stanford University's Hoover Institution. He is a National Humanities Medal recipient for innovative scholarship which incorporated history, economics, and political science. Born in poverty in North Carolina, Sowell grew up in Harlem, New York. Due to financial issues and deteriorated home conditions, he dropped out of Stuyvesant High School and served in the Marine Corps during the Korean War. Upon returning to the United States, Sowell took night classes at Howard University before matriculating at Harvard University, graduating magna cum laude in 1958. He earned a master's degree in economics from Columbia University in 1959, and earned his doctorate in economics from the University of Chicago in 1968. `,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Eric Voegelin",
                description: `Eric Voegelin was a German-American political philosopher. He was born in Cologne, and educated in political science at the University of Vienna, where he became an associate professor of political science in the law faculty. In 1938 he and his wife fled from the Nazi forces which had entered Vienna. They emigrated to the United States, where they became citizens in 1944. He spent most of his academic career at Louisiana State University, the University of Munich and the Hoover Institution of Stanford University.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Niccolò Machiavelli",
                description: `Niccolò di Bernardo dei Machiavelli occassionally rendered Nicholas Machiavel was an Italian diplomat, author, philosopher and historian who lived during the Renaissance. He is best known for his political treatise The Prince (Il Principe), written about 1513 but not published until 1532. He has often been called the father of modern political philosophy and political science. For many years he served as a senior official in the Florentine Republic with responsibilities in diplomatic and military affairs. He wrote comedies, carnival songs, and poetry. His personal correspondence is also important to historians and scholars of Italian correspondence.[10] He worked as secretary to the Second Chancery of the Republic of Florence from 1498 to 1512, when the Medici were out of power. `,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Stephen Hawking",
                description:
                    "Stephen William Hawking was an English theoretical physicist, cosmologist, and author who, at the time of his death, was director of research at the Centre for Theoretical Cosmology at the University of Cambridge. Between 1979 and 2009, he was the Lucasian Professor of Mathematics at the University of Cambridge. Hawking was born in Oxford, into a family of physicians. In October 1959, at the age of 17, he began his university education at University College, Oxford, where he received a first-class BA degree in physics. In October 1962, he began his graduate work at Trinity Hall, Cambridge, where in March 1966, he obtained his PhD degree in applied mathematics and theoretical physics, specialising in general relativity and cosmology. In 1963, Hawking was diagnosed with an early-onset slow-progressing form of motor neurone disease (amyotrophic lateral sclerosis – ALS, for short) that gradually, over the decades, paralysed him. After the loss of his speech, he communicated through a speech-generating device initially through use of a handheld switch, and eventually by using a single cheek muscle.",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Carl Sagan",
                description: `Carl Edward Sagan was an American astronomer, planetary scientist, cosmologist, astrophysicist, astrobiologist, author, and science communicator. His best known scientific contribution is research on extraterrestrial life, including experimental demonstration of the production of amino acids from basic chemicals by radiation. Sagan assembled the first physical messages sent into space, the Pioneer plaque and the Voyager Golden Record, universal messages that could potentially be understood by any extraterrestrial intelligence that might find them. Sagan argued the hypothesis, accepted since, that the high surface temperatures of Venus can be attributed to, and calculated using, the greenhouse effect. He testified to the US Congress in 1985 that the greenhouse effect would change the earth's climate system.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "George Orwell",
                description: `Eric Arthur Blair known by his pen name George Orwell, was an English novelist, essayist, journalist and critic. His work is characterised by lucid prose, social criticism, opposition to totalitarianism, and support of democratic socialism. Orwell produced literary criticism and poetry, fiction and polemical journalism. He is known for the allegorical novella Animal Farm (1945) and the dystopian novel Nineteen Eighty-Four (1949). His non-fiction works, including The Road to Wigan Pier (1937), documenting his experience of working-class life in the industrial north of England, and Homage to Catalonia (1938), an account of his experiences soldiering for the Republican faction of the Spanish Civil War (1936–1939), are as critically respected as his essays on politics and literature, language and culture. `,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Richard Feynman",
                description: `Richard Feynman was an American theoretical physicist, known for his work in the path integral formulation of quantum mechanics, the theory of quantum electrodynamics, the physics of the superfluidity of supercooled liquid helium, as well as his work in particle physics for which he proposed the parton model. For contributions to the development of quantum electrodynamics, Feynman received the Nobel Prize in Physics in 1965 jointly with Julian Schwinger and Shin'ichirō Tomonaga.`,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                name: "Júlio César de Melo e Sousa",
                description: `Júlio César de Melo e Sousa was a Brazilian writer and mathematics professor. He is well known in Brazil and abroad by his books on recreational mathematics, most of them published under the pen names of Malba Tahan and Breno de Alencar Bianco. He wrote 69 books of tales and 51 of mathematics and other subjects, which by 1995 had sold over two million books. His most famous work, The Man Who Counted, saw its 54th printing in 2001. Júlio César's most popular books, including The Man Who Counted, are collections of mathematical problems, puzzles, and curiosities, embedded in tales inspired by the Arabian Nights. He thoroughly researched his subject matters — not only the mathematics, but also the history, geography, and culture of the Islamic Empire which was the backdrop and connecting thread of his books. Yet Júlio César's travels outside Brazil were limited to short visits to Buenos Aires, Montevideo, and Lisbon: he never set foot in the deserts and cities which he so vividly described in his book.  `,
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete("authors", null, {});
    },
};
