'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({user}) {
      // define association here
      this.belongsTo(user, {foreignKey:'userId'})
    }
    toJSON(){
      return {...this.get(), id: undefined}
    }
  }
  post.init({
    description: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'post',
    modelName: 'post',
  });
  return post;
};