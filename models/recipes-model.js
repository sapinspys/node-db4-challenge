// - `getRecipes()`: should return a list of all recipes in the database.
// - `getShoppingList(recipe_id)`: should return a list of all ingredients and quantities for a given recipe
// - `getInstructions(recipe_id)`: should return a list of step by step instructions for preparing a recipe

const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes")
    .innerJoin("ingredients", "recipes.id", "=", "ingredients.recipe_id")
    .where({ recipe_id });
}

function getInstructions(recipe_id) {
  return db("recipe_steps")
    .where({ recipe_id });
}
