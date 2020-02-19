import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import resolvers from "./resolvers";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
});

export default server;
