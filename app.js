require("dotenv").config()
const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const schema = require("./schema/schema")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
const PORT = 4000

app.use(cors())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", () => {
  console.log("connected to database")
})

app.use("/graphql", graphqlHTTP({ schema, graphiql: true }))

app.listen(PORT, () => {
  console.log("server running on port " + PORT)
})
