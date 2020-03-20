const db = require("../../knexconfig")

function getTasks(){
    return db("tasks")
}

function addTask(task){
    return db("tasks")
        .insert(task)
}

function editTask(task_id, task){
    return db("tasks")
        .where({ task_id })
        .update(task)
}

function deleteTask(task_id){
    return db("tasks")
        .where({ task_id })
        .del()
}

module.exports = {
    getTasks,
    addTask,
    editTask,
    deleteTask
}