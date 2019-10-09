'use strict';

module.exports = (sequelize, DataTypes) => {
  const Meal = sequelize.define('Meal', {
    name: DataTypes.STRING
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
    Meal.belongsToMany(models.Food, {
    through: 'MealFoods',
    as: 'foods',
    foreignKey: 'mealId',
    otherKey: 'foodId'
    });
  };
  return Meal;
};
