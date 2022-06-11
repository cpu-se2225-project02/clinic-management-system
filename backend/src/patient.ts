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
import { Context, context } from './context';

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
export function getAllPatients(condition: string, ctx: Context) {
  if (condition === 'a-z') {
    return ctx.db.patient.findMany({
      orderBy: [
        {
          l_name: 'asc',
        },
      ],
    });
  } if (condition === 'z-a') {
    return ctx.db.patient.findMany({
      orderBy: [
        {
          l_name: 'desc',
        },
      ],
    });
  }
  return ctx.db.patient.findMany();
}
// Above ^^^
export const patients = queryField('patients', {
  type: list(Patient),
  args: {
    condition: stringArg(),
  },
  resolve: (root, args, ctx) => getAllPatients(args.condition as string, context),
});

export function getAPatient(patientId: number, ctx: Context) {
  return ctx.db.patient.findUnique({
    where: {
      id: patientId,
    },
  });
}
// above ^^
export const specificPatient = queryField('specificPatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve: (root, args, ctx) => getAPatient(args.patientId, context),
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

export const UpdatePatientInput = inputObjectType({
  name: 'UpdatePatientInput',
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
  },
});

export type CreatePatientType = NexusGenInputs['PatientInput'];
export function createPatient(newPatient: CreatePatientType, ctx: Context) {
  return ctx.db.patient.create({
    data: {
      ...newPatient,
    },
  });
}
// above ^^
export const AddPatient = mutationField('addPatient', {
  type: Patient,
  args: {
    newPatient: nonNull(PatientInput),
  },
  resolve: (root, args, ctx) => createPatient(args.newPatient, context),
});

export type UPdatePatientInputType = NexusGenInputs['UpdatePatientInput'];
export function editAPatient(thePatient: UPdatePatientInputType, ctx: Context) {
  return ctx.db.patient.update({
    data: {
      ...thePatient,
    },
    where: {
      id: thePatient.id as number,
    },
  });
}
// above ^^^
export const EditPatient = mutationField('editPatient', {
  type: Patient,
  args: {
    editedPatient: nonNull(UpdatePatientInput),
  },
  resolve: (
    root,
    args,
    ctx,
  ) => editAPatient(args.editedPatient, context),
});
// edit resolve part
export function deleteAPatient(patientId: number, ctx: Context) {
  return ctx.db.patient.delete({
    where: {
      id: patientId,
    },
  });
}
// above
export const DeletePatient = mutationField('deletePatient', {
  type: Patient,
  args: {
    patientId: nonNull(intArg()),
  },
  resolve: (root, args, ctx) => deleteAPatient(args.patientId, context),
});
