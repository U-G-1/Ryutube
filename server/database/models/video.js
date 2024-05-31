"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class Video extends Model {
    static associate(models) {
      this.hasMany(models.Comment, {
        sourceKey: "idx",
        foreignKey: "videoId",
      });
      this.hasMany(models.VideoLike, {
        sourceKey: "idx",
        foreignKey: "videoId",
      });
      this.hasMany(models.VideoDislike, {
        sourceKey: "idx",
        foreignKey: "videoId",
      });
      this.belongsTo(models.Channel, {
        foreignKey: "channelId",
        targetKey: "idx",
      });
    }
  }

  Video.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      channelId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
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
      modelName: "Video",
    }
  );

  return Video;
};
