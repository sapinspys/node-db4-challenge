exports.seed = function(knex) {
  return knex("recipes").insert([
    { id: 1, name: "Mushroom Pizza", created_by: 'Guillermo Arria-Devoe' },
    { id: 2, name: "Spinach Pesto Pizza", created_by: 'Guillermo Arria-Devoe' },
    { id: 3, name: "Hawaiian Pizza", created_by: 'Guillermo Arria-Devoe' }
  ]);
};
