/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import {
  inputObjectType,
  intArg,
  list,
  mutationField,
  nonNull,
  objectType,
  queryField,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Patient as PatientType } from 'nexus-prisma';
import { Appointment } from './appointment';

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
    t.field('appointments', {
      type: list(Appointment),
      resolve(patient) {
        return db.appointment.findMany({ where: { patient_id: patient.id } });
      },
    });
  },
});

// R = read
export const patients = queryField('patients', {
  type: list(Patient),
  resolve() {
    return db.patient.findMany();
  },
});

export const specificPatient = queryField('specificPatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve(root, args) {
    return db.patient.findUnique({
      where: { id: args.patientId },
    });
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

export const EditPatient = mutationField('editPatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
    editedPatient: nonNull(PatientInput),
  },
  resolve(root, args: { editedPatient: Prisma.PatientUpdateInput, patientId: Prisma.PatientWhereUniqueInput }) {
    return db.patient.update({
      where: { id: args.patientId as any },
      data: args.editedPatient,
    });
  },
});

export const DeletePatient = mutationField('deletePatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve(root, args: { patientId: Prisma.PatientWhereUniqueInput }) {
    return db.patient.delete({
      where: { id: args.patientId as any },
    });
  },
});
