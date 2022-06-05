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
import { createContext } from './context';
import * as userType from './user';
import { permissions } from './permissions';

const app = express();
const PORT = 8001;

const schema = makeSchema({
  // eslint-disable-next-line max-len
  types: [patientTypes, appointmentTypes, doctorTypes, paymentTypes, medNotesTypes, prescriptionType, medHistoryTypes, referralType, userType],
  outputs: {
    typegen: path.join(__dirname, 'generated/graphql-types.ts'),
    schema: path.join(__dirname, '../../frontend/schema.graphql'),
  },
});

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
