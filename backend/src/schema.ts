/* eslint-disable linebreak-style */
import {
  inputObjectType,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
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
    t.field(PatientType.id);
    t.field(PatientType.l_name);
    t.field(PatientType.f_name);
    t.field(PatientType.m_initial);
    t.field(PatientType.address);
    t.field(PatientType.age);
    t.field(PatientType.suffix);
    t.field(PatientType.sex);
    t.field(PatientType.birthdate);
  },
});

export const patients = queryField('patients', {
  type: list(Patient),
  resolve() {
    return db.patient.findMany();
  },
});

export const PatientInput = inputObjectType({
  name: 'PatientInput',
  definition(t) {
    t.field(PatientType.l_name);
    t.field(PatientType.f_name);
    t.field(PatientType.m_initial);
    t.field(PatientType.address);
    t.field(PatientType.age);
    t.field(PatientType.suffix);
    t.field(PatientType.sex);
    t.field(PatientType.birthdate);
  },
});

export const AddPatient = mutationField('addPatient', {
  type: 'Patient',
  args: {
    newPatient: nonNull(PatientInput),
  },
  resolve(root, args: { newPatient: Prisma.PatientCreateInput }) {
    return db.patient.create({ data: args.newPatient });
  },
});
