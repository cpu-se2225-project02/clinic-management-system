/* eslint-disable linebreak-style */
import { makeSchema } from 'nexus';

import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';
import * as types from './schema';

const app = express();
const PORT = 8000;

const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(__dirname, 'generated/graphql-types.ts'),
    schema: path.join(__dirname, '../../frontend/schema.graphql'),
  },
});

const server = new ApolloServer({
  schema,
});

server
  .start()
  .then(() => {
    server.applyMiddleware({ app });
    app.listen(PORT, () => {
      console.log(`Apollo server has started at http://localhost:${PORT}`);
    });
  });
