const db = require("../../knexconfig")

function getProjects(){
    return db("projects")
}
function getProjectDetails(project_id){
    return db("projects")
        .where({ project_id })
}
function addProject(project){
    return db("projects")
        .insert(project)
}
function getTasksByProjectId(project_id){
    return db("tasks")
        .where({ project_id })
}
function getResourcesById(project_id){
    return db("resources")
        .where({ project_id })
}
function getContextsById(project_id){
    return db("contexts")
        .select("contexts.context_id", "contexts.context_description")
        .join("connection_table", "contexts.task_id", "connection_table.task_id")
        .join("projects", "connection_table.project_id", "projects.project_id")
        .where("projects.project_id", `${ project_id }`)
}
function editProject(project_id, project){
    return db("projects")
        .where({ project_id })
        .update(project)
}
function deleteProject(project_id){
    return db("projects")
        .where({ project_id })
        .del()
}

module.exports = {
    getProjects,
    getProjectDetails,
    addProject,
    getTasksByProjectId,
    getResourcesById,
    getContextsById,
    editProject,
    deleteProject
}