const express = require("express")
const server = express()
const projectsRouter = require("../routers/projectsRouter")
const tasksRouter = require("../routers/tasksRouter")
const resourcesRouter = require("../routers/resourcesRouter")
const contextsRouter = require("../routers/contextsRouter")

server.use(express.json())
server.use("/api/projects", projectsRouter)
server.use("/api/tasks", tasksRouter)
server.use("/api/resources", resourcesRouter)
server.use("/api/contexts", contextsRouter)
module.exports = server