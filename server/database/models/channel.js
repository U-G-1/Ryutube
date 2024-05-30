const Sequelize = require("sequelize");

module.exports = class channel extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            idx: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
                autoIncrement:true,
            },
            userId: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull:false,
            },
            name: {
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
    static associate(db) {
        this.belongsTo(models.user,{
            foreignKey: 'userId',
            targetKey: 'uid',
        });
        this.hasMany(models.subscribe,{
            sourceKey: 'idx',
            foreignKey: 'channelId',
        });
        this.hasMany(models.vedio,{
            sourceKey: 'idx',
            foreignKey: 'channelId',
        });
    }
};
