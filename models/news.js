"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  News.init(
    {
      name: DataTypes.STRING,
      content: DataTypes.STRING,
      image: {
        type: DataTypes.BLOB("long"),
        get() {
          return this.getDataValue("image").toString("utf8");
        }
      },
      categoryId: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "News",
      timestamps: true,
      paranoid: true,
    }
  );
  return News;
};
