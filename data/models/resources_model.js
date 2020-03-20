const db = require("../../knexconfig")

function getResources(){
    return db("resources")
}

function addResource(resource){
    return db("resources")
        .insert(resource)
}

function editResource(resource_id, resource){
    return db("resources")
        .where({ resource_id })
        .update(resource)
}

function deleteResource(resource_id){
    return db("resources")
        .where({ resource_id })
        .del()
}

module.exports = {
    getResources,
    addResource,
    editResource,
    deleteResource
}