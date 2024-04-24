const Sequelize = require("sequelize");

module.exports = class videoLike extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            idx: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
                autoIncrement:true,
            },
            userId: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            videoId: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            timeStemp: {
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
