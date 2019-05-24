import 'reflect-metadata'
import { importSchema } from 'graphql-import'
import { ApolloServer } from 'apollo-server-express'
import { createConnection } from 'typeorm'
import * as express from 'express'
import * as bodyParser from 'body-parser'
import * as path from 'path'

import Routes from './routes'

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'))
const resolvers = {
  Query: {},
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(Routes)
server.applyMiddleware({ app })

createConnection().then(async () => {
  app.listen(8080, () => {
    console.log(`🚀  Server ready at localhost:8080${server.graphqlPath}`)
  })
})
