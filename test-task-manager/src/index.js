const { GraphQLServer } = require('graphql-yoga');
import prisma from './prisma';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation';
import Subscription from './resolvers/Subscription';

const server = new GraphQLServer({
  typeDefs: './src/generated/schema/schema.graphql',
  resolvers: {
    Query,
    Mutation,
    Subscription,
  },
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on http://localhost:4000'));
