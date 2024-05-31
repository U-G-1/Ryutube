"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Channel extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uid",
      });
      this.hasMany(models.Subscribe, {
        sourceKey: "idx",
        foreignKey: "channelId",
      });
      this.hasMany(models.Video, {
        sourceKey: "idx",
        foreignKey: "channelId",
      });
    }
  }

  Channel.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      crdt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Channel",
    }
  );

  return Channel;
};
