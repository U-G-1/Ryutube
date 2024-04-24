const Sequelize = require("sequelize");

module.exports = class video extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            idx: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
                autoIncrement:true,
            },
            channelId: {
                type: Sequelize.STRING,
                unique: true,
                allowNull:false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            path: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            count: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            description: {
                type: Sequelize.STRING,
            },
            crdt: {
                type: Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
            updt: {
                type: Sequelize.DATE,
                allowNull:false,
                defaultValue:Sequelize.NOW,
            },
        }
        );
    }
    // static associate(db) {
    //     db.
    // }
};
