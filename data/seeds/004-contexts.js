
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("contexts").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("contexts").insert([
        { context_description: "test context 1", task_id: 1 },
        { context_description: "test context 2", task_id: 2 },
        { context_description: "test context 3", task_id: 3 }
      ]);
    });
};
