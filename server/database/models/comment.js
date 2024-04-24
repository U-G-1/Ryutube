const Sequelize = require("sequelize");

module.exports = class comment extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            idx: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
                autoIncrement:true,
            },
            comment: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            userId: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            videoId: {
                type: Sequelize.STRING,
                allowNull:false,
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
