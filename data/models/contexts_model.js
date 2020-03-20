const db = require("../../knexconfig")

function getContexts(){
    return db("contexts")
}

function addContext(context){
    return db("contexts")
        .insert(context)
}

function editContext(context_id, context){
    return db("contexts")
        .where({ context_id })
        .update(context)
}

function deleteContext(context_id){
    return db("contexts")
        .where({ context_id })
        .del()
}

module.exports = {
    getContexts,
    addContext,
    editContext,
    deleteContext
}