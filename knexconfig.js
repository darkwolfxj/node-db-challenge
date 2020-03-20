const knex = require("knex")
const knexconfig = require("./knexfile")
const dbConfig = knex(knexconfig.development)

module.exports = dbConfig