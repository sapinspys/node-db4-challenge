exports.seed = function(knex) {
  return knex("ingredients").insert([
    { id: 1, name: "Cup of Shredded Mozzarella" },
    { id: 2, name: "Cup of Mushrooms" },
    { id: 3, name: "Cup of Spinach" },
    { id: 4, name: "Ounce(s) of Crushed Tomatoes"},
    { id: 5, name: "Cup of Diced Pineapples"},
    { id: 6, name: "Cup of Diced Ham"},
    { id: 7, name: "Ounce(s) of Pesto Sauce"},
    { id: 8, name: "Grams of Pizza Dough"}
  ]);
};
