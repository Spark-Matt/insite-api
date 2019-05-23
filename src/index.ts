import 'reflect-metadata'
import { importSchema } from 'graphql-import'
import { ApolloServer } from 'apollo-server'
import * as path from 'path'

const typeDefs = importSchema(path.join(__dirname, 'schema.graphql'))
const resolvers = {
  Query: {},
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
