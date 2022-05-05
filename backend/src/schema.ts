/* eslint-disable linebreak-style */
import {
  list,
  objectType,
  queryField,
} from 'nexus';
import { PrismaClient } from '@prisma/client';
import { Patient as PatientType } from 'nexus-prisma';

const db = new PrismaClient();

export const hello = queryField('helloWorld', {
  type: 'String',
  resolve() {
    return 'Hello World!';
  },
});

export const Patient = objectType({
  name: 'Patient',
  definition(t) {
    t.field(PatientType.l_name);
  },
});

export const patients = queryField('patients', {
  type: list(Patient),
  resolve() {
    return db.patient.findMany();
  },
});
