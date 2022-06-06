/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { makeSchema } from 'nexus';
import express from 'express';
import path from 'path';
import { graphqlHTTP } from 'express-graphql';
import { applyMiddleware } from 'graphql-middleware';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import * as prescriptionType from './prescription';
import * as patientTypes from './patient';
import * as appointmentTypes from './appointment';
import * as doctorTypes from './doctor';
import * as paymentTypes from './payment';
import * as medNotesTypes from './medNotes';
import * as medHistoryTypes from './medHistory';
import * as referralType from './referral';
import * as userTypes from './auth/user';
import { createContext } from './auth/context';
import { permissions } from './auth/permissions/index';

const app = express();
const PORT = 8001;

const schemaWithoutPermissions = makeSchema({
  types: [
    patientTypes,
    appointmentTypes,
    doctorTypes,
    paymentTypes,
    medNotesTypes,
    prescriptionType,
    medHistoryTypes,
    referralType,
    userTypes,
  ],
  outputs: {
    typegen: path.join(__dirname, 'generated/graphql-types.ts'),
    schema: path.join(__dirname, '../../frontend/schema.graphql'),
  },
  contextType: {
    module: require.resolve('./auth/context'),
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
      schema,
      graphiql: !process.env.NODE_ENV?.startsWith('prod'),
      context: createContext,
    }),
  )
  .listen(PORT, () => {
    console.log(
      `Express Graphql server started at http://localhost:${PORT}/graphql`,
    );
  });
