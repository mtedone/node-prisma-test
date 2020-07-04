import { Prisma } from 'prisma-binding';
require('dotenv').config();

const prisma = new Prisma({
  typeDefs: 'src/generated/schema/schema.graphql',
  endpoint: 'http://localhost:4466',
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
});

export { prisma as default };
