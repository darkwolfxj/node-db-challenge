
exports.up = function(knex) {
    return knex.schema.createTable("projects", tbl => {
        tbl.increments("project_id")
        tbl.string("project_name")
            .notNullable()
            .unique()
        tbl.string("project_description")
            .unique()
        tbl.boolean("project_completed")
            .defaultTo(false)
    }).createTable("resources", tbl => {
        tbl.increments("resource_id")
        tbl.string("resource_name")
            .notNullable()
        tbl.string("resource_description")
        tbl.integer("project_id")
            .notNullable()  
    }).createTable("tasks", tbl => {
        tbl.increments("task_id")
        tbl.string("task_description")
            .notNullable()
        tbl.string("task_notes")
        tbl.integer("project_id")
            .notNullable()
        tbl.boolean("task_completed")
            .defaultTo(false)      
    }).createTable("contexts", tbl => {
        tbl.increments("context_id")
        tbl.text("context_description")
            .notNullable()
        tbl.integer("task_id")
            .notNullable()        
    }).createTable("connection_table", tbl => {
        tbl.integer("project_id")
            .references("project_id")
            .inTable("projects")
        tbl.integer("resource_id")
            .references("resource_id")
            .inTable("resources")
        tbl.integer("task_id")
            .references("task_id")
            .inTable("tasks")
        tbl.integer("context_id")
            .references("context_id")
            .inTable("contexts")                        
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable("connection_table")
        .dropTable("contexts")
        .dropTable("tasks")
        .dropTable("resources")
        .dropTable("projects")
};
