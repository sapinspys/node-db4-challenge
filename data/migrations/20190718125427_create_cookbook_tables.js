exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
      tbl.text("created_by", 255).notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl.text("name", 128).notNullable();
    })

    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .float("quantity")
        .unsigned()
        .notNullable();
    })

    .createTable("recipe_steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT");
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.text("instructions").notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("recipe_steps");
};
