
exports.seed = function(knex) {
  // truncateetes ALL existing entries
  return knex("tasks").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("tasks").insert([
        { task_description: "test description 1", project_id: 1 },
        { task_description: "test description 2", project_id: 2 },
        { task_description: "test description 3", project_id: 3 }
      ]);
    });
};
