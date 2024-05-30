const Sequelize = require("sequelize");

module.exports = class user extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            uid: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
                autoIncrement:true,
            },
            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull:false,
            },
            password: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            name: {
                type: Sequelize.STRING,
                allowNull:false,
            },
            imgpath: {
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
    static associate(db) {
        db.user.hasMany(db.channel,{ foreignKey: 'userId', sorceKey: 'uid'});
        db.user.hasMany(db.comment, {foreignKey: 'userId', sorceKey: 'uid'});
    }
};
