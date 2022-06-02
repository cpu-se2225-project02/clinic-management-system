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
      resolve(medicalhistory) {
        return db.patient.findFirst({ where: { id: medicalhistory.patient_id } });
      },
    });
  },
});

// read
export const medicalhistory = queryField('medicalhistory', {
  type: list(MedicalHistory),
  resolve() {
    return db.medicalHistory.findMany();
  },
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
  resolve(root, args: {newMedHistory: Prisma.MedicalHistoryCreateInput }) {
    return db.medicalHistory.create({ data: args.newMedHistory });
  },
});

// edit

export const EditMedHistoryInput = inputObjectType({
  name: 'EditMedHistoryInput',
  definition(t) {
    t.field(MedHistoryType.diagnosis);
    t.field(MedHistoryType.treatment_plan);
    t.field(MedHistoryType.description);
  },
});

export const EditMedHistory = mutationField('editMedHistory', {
  type: MedicalHistory,
  args: {
    medicalhistoryId: nonNull(intArg()),
    editedMedHistory: nonNull(EditMedHistoryInput),
  },

  // eslint-disable-next-line max-len
  resolve(root, args: { editedMedHistory: Prisma.MedicalHistoryUpdateInput, medicalhistoryId: Prisma.MedicalHistoryWhereUniqueInput }) {
    return db.medicalHistory.update({
      where: { id: args.medicalhistoryId as any },
      data: args.editedMedHistory,
    });
  },
});

// delete
export const DeleteMedHistory = mutationField('deleteMedHistory', {
  type: MedicalHistory,
  args: {
    medicalhistoryId: nonNull(intArg()),
  },
  resolve(root, args: { medicalhistoryId: Prisma.MedicalHistoryWhereUniqueInput }) {
    return db.medicalHistory.delete({
      where: { id: args.medicalhistoryId as any },
    });
  },
});
