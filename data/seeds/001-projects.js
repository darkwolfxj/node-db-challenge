
exports.seed = function(knex) {
  // truncateetes ALL existing entries
  return knex("projects").truncate()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        { project_name: "test project 1" },
        { project_name: "test project 2" },
        { project_name: "test project 3" }
      ]);
    });
};
