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
  stringArg,
} from 'nexus';

import { Prisma, PrismaClient } from '@prisma/client';
import { Patient as PatientType } from 'nexus-prisma';
import { Appointment } from './appointment';
import { NexusGenInputs } from './generated/graphql-types';
import { Context } from './context';

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
    t.field(PatientType.m_name);
    t.field(PatientType.address);
    t.field(PatientType.age);
    t.field(PatientType.suffix);
    t.field(PatientType.sex);
    t.field(PatientType.birthdate);
    t.field(PatientType.constactNo);
    t.field(PatientType.email);
    t.field('appointments', {
      type: list(Appointment),
      resolve(patient) {
        return db.appointment.findMany({ where: { patient_id: patient.id } });
      },
    });
  },
});

// R = read
export function getAllPatients(ctx: Context) {
  return ctx.prisma.patient.findMany();
}
export const patients = queryField('patients', {
  type: list(Patient),
  args: {
    condition: stringArg(),
  },
  resolve(root, args: {condition: String}) {
    if (args.condition === 'a-z') {
      return db.patient.findMany({
        orderBy: [
          {
            l_name: 'asc',
          },
        ],
      });
    } if (args.condition === 'z-a') {
      return db.patient.findMany({
        orderBy: [
          {
            l_name: 'desc',
          },
        ],
      });
    }
    return db.patient.findMany();
  },
});

export function getAPatient(patientId: Prisma.PatientWhereUniqueInput, ctx: Context) {
  return ctx.prisma.patient.findUnique({
    where: {
      id: patientId.id,
    },
  });
}
export const specificPatient = queryField('specificPatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve: (root, args: {patientId: Prisma.PatientWhereUniqueInput}, ctx) => getAPatient(args.patientId, ctx),
});

export const PatientInput = inputObjectType({
  name: 'PatientInput',
  definition(t) {
    t.field(PatientType.l_name);
    t.field(PatientType.f_name);
    t.field(PatientType.m_name);
    t.field(PatientType.address);
    t.field(PatientType.age);
    t.field(PatientType.suffix);
    t.field(PatientType.sex);
    t.field(PatientType.birthdate);
    t.field(PatientType.constactNo);
    t.field(PatientType.email);
  },
});

export type CreatePatientType = NexusGenInputs['PatientInput'];
export function createPatient(newPatient: CreatePatientType, ctx: Context) {
  return ctx.prisma.patient.create({
    data: {
      ...newPatient,
    },
  });
}

export const AddPatient = mutationField('addPatient', {
  type: 'Patient',
  args: {
    newPatient: nonNull(PatientInput),
  },
  resolve: (root, args: { newPatient: Prisma.PatientCreateInput }, ctx) => createPatient(args.newPatient, ctx),
});

export function editAPatient(thePatient: Prisma.PatientUpdateInput, patientId: Prisma.PatientWhereUniqueInput, ctx: Context) {
  return ctx.prisma.patient.update({
    data: {
      ...thePatient,
    },
    where: {
      id: patientId as number,
    },
  });
}

export const EditPatient = mutationField('editPatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
    editedPatient: nonNull(PatientInput),
  },
  resolve: (
    root,
    args:
     { editedPatient: Prisma.PatientUpdateInput, patientId: Prisma.PatientWhereUniqueInput },
    ctx,
  ) => editAPatient(args.editedPatient, args.patientId, ctx),
});

export function deleteAPatient(patientId: Prisma.PatientWhereUniqueInput, ctx: Context) {
  return ctx.prisma.patient.delete({
    where: {
      id: patientId as number,
    },
  });
}
export const DeletePatient = mutationField('deletePatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve: (root, args:
    { patientId: Prisma.PatientWhereUniqueInput }, ctx) => deleteAPatient(args.patientId, ctx),
});
