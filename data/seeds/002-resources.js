
exports.seed = function(knex) {
  // truncateetes ALL existing entries
  return knex("resources").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("resources").insert([
        { resource_name: "test resource 1", project_id: 1 },
        { resource_name: "test resource 2", project_id: 2 },
        { resource_name: "test resource 3", project_id: 3 }
      ])
    })
};
