const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Member extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    };
    Member.init({
        id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
        },
        name: DataTypes.STRING,
        image: DataTypes.STRING
    }, {
      sequelize,
      modelName: 'Members',
    });
    return Member;
};