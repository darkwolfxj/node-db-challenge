const db = require("../data/models/models")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    db.tasks.getTasks()
        .then(tasks => res.status(200).json(tasks))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.post("/", (req, res) => {
    db.tasks.addTask(req.body)
        .then(() => res.status(201).json(req.body))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.put("/:id", (req, res) => {
    db.tasks.editTask(req.params.id, req.body)
        .then(() => res.status(201).json(req.body))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.delete("/:id", (req, res) => {
    db.tasks.deleteTask(req.params.id)
        .then(() => res.status(200).json(req.body))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

module.exports = router