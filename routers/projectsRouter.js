const db = require("../data/models/models")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    db.projects.getProjects()
        .then(projects => res.status(200).json(projects))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
        
})

router.get("/:id", async (req, res) => {
    const container = { 
        project: 
            await db.projects.getProjectDetails(req.params.id)
            .then(project => { return {
                id: `${ project.project_id }`,
                name: `${ project.project_name }`,
                description: `${ project.project_description }`,
                completed: (project.project_completed)?(true):(false )
            }
            }),
        tasks: 
            await db.projects.getTasksByProjectId(req.params.id)
                .then(tasks => tasks.map(task => { return { 
                    id: `${ task.task_id }` ,
                    description: `${ task.task_description }`,
                    notes: `${ task.task_notes }`,
                    completed: `${ (task.task_completed)?(true):(false) }`
                }
                })),
        resources: 
            await db.projects.getResourcesById(req.params.id)
                .then(resources => resources.map(resource => { return {
                    id: `${ resource.resource_id }`,
                    name: `${ resource.resource_name }`,
                    description: `${ resource.resource_description }`        
                }
                })),
        contexts: 
            await db.projects.getContextsById(req.params.id)
                .then(contexts => contexts.map(context => { return {
                    id: `${ context.context_id }`,
                    description: `${ context.context_description }`  
                }
            }))
     }
     return res.status(200).json(container)  
})

router.get("/:id/tasks", (req, res) => {
    db.projects.getTasksByProjectId(req.params.id)
        .then(tasks => res.status(200).json(tasks))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})
    
router.get("/:id/resources", (req, res) => {
        db.projects.getResourcesById(req.params.id)
        .then(resources => res.status(200).json(resources))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.get("/:id/contexts", (req, res) => {
        db.projects.getContextsById(req.params.id)
            .then(contexts => res.status(200).json(contexts))
            .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.post("/", (req, res) => {
        db.projects.addProject(req.body)
            .then(() => res.status(201).json(req.body))
            .catch(() => res.status(500).json({ message: "Internal server error" }))
    })

router.put("/:id", (req, res) => {
        db.projects.editProject(req.params.id, req.body)
            .then(() => res.status(201).json(req.body))
            .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.delete("/:id", (req, res) => {
        db.projects.deleteProject(req.params.id)
            .then(() => res.status(200).json({ message: "Deleted successfully!" }))
            .catch(() => res.status(500).json({ message: "Internal server error" }))
})

module.exports = router
    