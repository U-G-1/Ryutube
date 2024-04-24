const Sequelize = require("sequelize");

module.exports = class subscribe extends Sequelize.Model {
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
            chaId: {
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
