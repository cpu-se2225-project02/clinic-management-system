/* eslint-disable linebreak-style */
import { makeSchema } from 'nexus';

import express from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import * as types from './schema';
import * as PrescriptionType from './prescription';

const app = express();
const PORT = 8001;
const db = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const schema = makeSchema({
  types: [types, PrescriptionType],
  outputs: {
    typegen: path.join(__dirname, 'generated/graphql-types.ts'),
    schema: path.join(__dirname, '../../frontend/schema.graphql'),
  },
});

app
  .use(cors())
  .use('/graphql', graphqlHTTP({
    schema,
    graphiql: !process.env.NODE_ENV?.startsWith('prod'),
    context: {
      db,
    },
  }))
  .listen(PORT, () => {
    console.log(`Express Graphql server started at http://localhost:${PORT}/graphql`);
  });
