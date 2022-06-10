/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { makeSchema } from 'nexus';
import express, { query } from 'express';
import path from 'path';
import { ApolloServer } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import * as prescriptionType from './prescription';
import * as patientTypes from './patient';
import * as appointmentTypes from './appointment';
import * as doctorTypes from './doctor';
import * as paymentTypes from './payment';
import * as medNotesTypes from './medNotes';
import * as medHistoryTypes from './medHistory';
import * as referralType from './referral';
import {
  WhoAmI, Mutation, AuthPayload, User,
} from './auth/user';
import { permissions } from './auth/permissions/index';
import { createContext, Context } from './context';

const app = express();
const PORT = 8001;

const db = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

const schemaWithoutPermissions = makeSchema({
  types: [
    WhoAmI,
    Mutation,
    User,
    AuthPayload,
    patientTypes,
    appointmentTypes,
    doctorTypes,
    paymentTypes,
    medNotesTypes,
    prescriptionType,
    medHistoryTypes,
    referralType,
  ],
  outputs: {
    typegen: path.join(__dirname, 'generated/graphql-types.ts'),
    schema: path.join(__dirname, '../../frontend/schema.graphql'),
  },
  contextType: {
    module: require.resolve('./context.ts'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: '@prisma/client',
        alias: 'prisma',
      },
    ],
  },
});

const schema = applyMiddleware(schemaWithoutPermissions, permissions);

app
  .use(cors())
  .use(
    '/graphql',
    graphqlHTTP({
      schema: schemaWithoutPermissions,
      graphiql: !process.env.NODE_ENV?.startsWith('prod'),
      context: {
        createContext,
      },
    }),
  )
  .listen(PORT, () => {
    console.log(
      `Express Graphql server started at http://localhost:${PORT}/graphql`,
    );
  });
