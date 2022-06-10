/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
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
import { MedicalHistory as MedHistoryType } from 'nexus-prisma';
import { Patient } from './patient';
import { NexusGenInputs } from './generated/graphql-types';
import { Context, context } from './context';

const db = new PrismaClient();

export const MedicalHistory = objectType({
  name: 'MedicalHistory',
  definition(t) {
    t.field(MedHistoryType.diagnosis);
    t.field(MedHistoryType.treatment_plan);
    t.field(MedHistoryType.description);
    t.field(MedHistoryType.id);
    t.field(MedHistoryType.patient_id);
    t.field('patient', {
      type: Patient,
      resolve(medicalHistory) {
        return db.patient.findFirst({ where: { id: medicalHistory.patient_id } });
      },
    });
  },
});

// read
export function getMedHistory(ctx: Context) {
  return ctx.db.medicalHistory.findMany();
}
export const medicalHistory = queryField('medicalhistory', {
  type: list(MedicalHistory),
  resolve: (root, args, ctx) => getMedHistory(ctx),
});

export const patientMedHistory = queryField('patientMedHistory', {
  type: list(MedicalHistory),
  args: {
    patientId: nonNull(intArg()),
  },
  resolve(root, args) {
    return db.medicalHistory.findMany({
      where: {
        patient_id: args.patientId,
      },
    });
  },
});

export type CreateMedHistory = NexusGenInputs['AddMedHistoryInput'];
export function createMedHistory(newMedHistory: CreateMedHistory, ctx: Context) {
  return ctx.db.medicalHistory.create({
    data: {
      ...newMedHistory,
    },
  });
}

// add
export const AddMedHistoryInput = inputObjectType({
  name: 'AddMedHistoryInput',
  definition(t) {
    t.field(MedHistoryType.diagnosis);
    t.field(MedHistoryType.treatment_plan);
    t.field(MedHistoryType.description);
    t.field(MedHistoryType.patient_id);
  },
});

export const AddMedHistory = mutationField('addMedHistory', {
  type: MedicalHistory,
  args: {
    newMedHistory: nonNull(AddMedHistoryInput),
  },
  resolve: (root, args, ctx) => createMedHistory(args.newMedHistory, ctx),
});

export const EditMedHistoryInput = inputObjectType({
  name: 'EditMedHistoryInput',
  definition(t) {
    t.field(MedHistoryType.diagnosis);
    t.field(MedHistoryType.treatment_plan);
    t.field(MedHistoryType.description);
  },
});

export function editMedicalHistory(medicalhistoryId: number, editedMedHistory: Prisma.MedicalHistoryUpdateInput, ctx: Context) {
  return ctx.db.medicalHistory.update({
    where: {
      id: medicalhistoryId,
    },
    data: {
      ...editedMedHistory,
    },
  });
}

export const EditMedHistory = mutationField('editMedHistory', {
  type: MedicalHistory,
  args: {
    medicalhistoryId: nonNull(intArg()),
    editedMedHistory: nonNull(EditMedHistoryInput),
  },
  resolve: (root, args: { medicalhistoryId: number, editedMedHistory: Prisma.MedicalHistoryUpdateInput }, ctx) => editMedicalHistory(args.medicalhistoryId, args.editedMedHistory, context),
});

export function deleteMedicalHistory(medicalhistoryId: number, ctx: Context) {
  return ctx.db.medicalHistory.delete({
    where: { id: medicalhistoryId },
  });
}

export const DeleteMedHistory = mutationField('deleteMedHistory', {
  type: MedicalHistory,
  args: {
    medicalhistoryId: nonNull(intArg()),
  },
  resolve: (root, args: { medicalhistoryId: number }, ctx) => deleteMedicalHistory(args.medicalhistoryId, context),
});
