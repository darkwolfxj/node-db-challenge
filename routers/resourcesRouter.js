const db = require("../data/models/models")
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    db.resources.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.post("/", (req, res) => {
    db.resources.addResource(req.body)
        .then(() => res.status(201).json(req.body))
        .catch(() => res.status(500).json({ message: "Internal server error" }))   
})

router.put("/:id", (req, res) => {
    db.resources.editResource(req.params.id, req.body)
        .then(() => res.status(201).json(req.body))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

router.delete("/:id", (req, res) => {
    db.resources.deleteResource(req.params.id)
        .then(() => res.status(200).json({ message: "Deleted successfully!" }))
        .catch(() => res.status(500).json({ message: "Internal server error" }))
})

module.exports = router