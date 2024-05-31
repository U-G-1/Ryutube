"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class VideoLike extends Model {
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "uid",
      });
      this.belongsTo(models.Video, {
        foreignKey: "videoId",
        targetKey: "idx",
      });
    }
  }

  VideoLike.init(
    {
      idx: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER, // 변경: STRING -> INTEGER
        allowNull: false,
      },
      videoId: {
        type: DataTypes.INTEGER, // 변경: STRING -> INTEGER
        allowNull: false,
      },
      timeStemp: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "VideoLike",
    }
  );

  return VideoLike;
};
