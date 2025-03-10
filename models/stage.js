'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Event, StageEvent}) {
      // define association here
      // events
      Stage.belongsToMany(Event,{
        foreignKey: "stage_id",
        as: "events",
        through: "StageEvent"
      })
    }
  }
  Stage.init({
    stage_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    genre: DataTypes.TEXT,
    available_start_time: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Stage',
  });
  return Stage;
};