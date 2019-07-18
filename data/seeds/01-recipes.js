exports.seed = function(knex) {
  return knex("recipes").insert([
    { id: 1, name: "Chicken Alfredo", created_by: 'Guillermo Arria-Devoe' },
    { id: 2, name: "Mushroom Pizza", created_by: 'Guillermo Arria-Devoe' },
    { id: 3, name: "Meat Lasagna", created_by: 'Guillermo Arria-Devoe' }
  ]);
};
