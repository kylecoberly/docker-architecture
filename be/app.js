const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const knex = require("knex")
const bodyParser = require("body-parser")

const app = express()

app.use(morgan("tiny"))
app.use(cors())
app.use(bodyParser.json())

const config = require("./knexfile")[process.env.NODE_ENV || "development"]
const database = knex(config)

app.get("/users", (request, response) => {
  database("user").select()
    .then(users => {
      response.json({ users })
    }).catch( error => {
      response.status(500).json({ error: error.message })
    })
})
app.post("/users", (request, response) => {
  database("user").insert({
    name: request.body.name
  }).returning("*")
    .then(users => users[0])
    .then(user => {
      response.json({ user })
    }).catch( error => {
      response.status(500).json({ error: error.message })
    })
})

app.listen(process.env.PORT, () => console.log(`Listening on port ${process.env.PORT}`))
