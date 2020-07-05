import { Prisma } from 'prisma-binding';
const { loadSchema } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { mergeSchemas } = require('@graphql-tools/merge');
import { makeExecutableSchema } from '@graphql-tools/schema';
const { mergeTypeDefs } = require('@graphql-tools/merge');
import { stitchSchemas } from '@graphql-tools/stitch';
import { print } from 'graphql/language/printer';
import fs from 'fs';

import path from 'path';
require('dotenv').config();
const generatedTypeDefs = require('./generated/prisma-client/prisma-schema')
  .typeDefs;

const customTypeDefs = require('./custom/authPayload').typeDefs;

const types = [generatedTypeDefs, customTypeDefs];

const allTypeDefs = mergeTypeDefs(types, { all: true });

let generatedSchema = makeExecutableSchema({
  typeDefs: generatedTypeDefs,
});

let customSchema = makeExecutableSchema({
  typeDefs: allTypeDefs,
});

const allSchema = stitchSchemas({
  subschemas: [{ schema: generatedSchema }, { schema: customSchema }],
});

const outputPath = path.join(
  __dirname,
  'generated',
  'schema',
  'allschemas.graphql'
);
fs.writeFileSync(outputPath, print(allTypeDefs));

const prisma = new Prisma({
  typeDefs: `${outputPath}`,
  endpoint: 'http://localhost:4466',
  secret: process.env.PRISMA_MANAGEMENT_API_SECRET,
});

export { prisma as default };
