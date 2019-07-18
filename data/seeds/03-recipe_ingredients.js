exports.seed = function(knex) {
  return knex("recipe_ingredients").insert([
    { id: 1, recipe_id: 1, ingredient_id: 1, quantity: 2 },
    { id: 2, recipe_id: 1, ingredient_id: 2, quantity: 1 },
    { id: 3, recipe_id: 1, ingredient_id: 4, quantity: 6 },
    { id: 4, recipe_id: 1, ingredient_id: 8, quantity: 400 },
    { id: 5, recipe_id: 2, ingredient_id: 1, quantity: 2 },
    { id: 6, recipe_id: 2, ingredient_id: 3, quantity: 1 },
    { id: 7, recipe_id: 2, ingredient_id: 7, quantity: 6 },
    { id: 8, recipe_id: 2, ingredient_id: 8, quantity: 400 },
    { id: 9, recipe_id: 3, ingredient_id: 1, quantity: 2 },
    { id: 10, recipe_id: 3, ingredient_id: 5, quantity: 0.5 },
    { id: 11, recipe_id: 3, ingredient_id: 6, quantity: 0.5 },
    { id: 12, recipe_id: 3, ingredient_id: 4, quantity: 6 },
    { id: 13, recipe_id: 3, ingredient_id: 8, quantity: 400 },
  ]);
};
