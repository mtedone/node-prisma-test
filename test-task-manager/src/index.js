const { GraphQLServer, PubSub } = require('graphql-yoga');
import prisma from './prisma';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';

const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: './src/generated/schema/schema.graphql',
  resolvers: {
    Query,
    Mutation,
  },
  context: {
    pubsub,
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
