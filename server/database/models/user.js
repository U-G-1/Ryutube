"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Comment, {
        sourceKey: "uid",
        foreignKey: "userId",
      });
      this.hasMany(models.Subscribe, {
        sourceKey: "uid",
        foreignKey: "userId",
      });
      this.hasMany(models.VideoLike, {
        sourceKey: "uid",
        foreignKey: "userId",
      });
      this.hasMany(models.VideoDislike, {
        sourceKey: "uid",
        foreignKey: "userId",
      });
    }
  }

  User.init(
    {
      uid: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imgpath: {
        type: DataTypes.STRING,
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
      modelName: "User",
    }
  );

  return User;
};
