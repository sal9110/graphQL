require("dotenv").config()
const express = require("express")
const { ApolloServer } = require("apollo-server-express")
const { ApolloServerPluginDrainHttpServer } = require("apollo-server-core")
const { typeDefs } = require("./schema/schema")
const resolvers = require("./resolvers")
const mongoose = require("mongoose")
const cors = require("cors")
const http = require("http")

const PORT = 4000

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once("open", () => {
  console.log("connected to database")
})

async function startApolloServer(typeDefs, resolvers) {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  })
  await server.start()
  server.applyMiddleware({ app })
  app.use(cors())
  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve))
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
}

startApolloServer(typeDefs, resolvers)
