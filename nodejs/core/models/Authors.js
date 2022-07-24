require('../../../dotenv');
const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../sequelize.js');

class Authors extends Model {
    async getAllNamesAndIds() {
        try {
            let data = await Authors.findAll({ attributes: ['id', 'name']})
            if (!data) { 
                throw new Error(`Error nothing of Categories was return`)
            }

            const authors = data.map((values) => {
                let dataValues = values.dataValues;

                return dataValues;
            })

            return authors;
        } catch(ex) {
            console.error(ex)
        }
    }

    async getAll() {
        let data = await Authors.findAll()
        if (!data) { throw new Error(`Error! wasn't return Authors`) }

        const allAuthors = data.map((values) => {
            let dataValues = values.dataValues;
            return dataValues;
        })

        return allAuthors;
    }

    async delete(id) {
        try {
            let deleted = await Authors.destroy({
                where: {
                    id
                }
            })

            return deleted;
        } catch(ex) {
            console.log(ex)
        }

        return deleted;
    }

    async update(id, changes) {
        try {
            let updated = await Authors.update(changes, { where: {id}});
            if(!updated) {throw new Error('Error updating author')};

            return updated;
        } catch(ex) {
            console.log(ex);
        }
    }
}

Authors.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'authors',
    timestamps: true
});

(async() => {
    const authors = new Authors();
    console.log(await authors.getAll());
})();

module.exports = Authors;
