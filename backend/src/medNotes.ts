/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { MedicalNotes as MedNotesType } from 'nexus-prisma';
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, intArg, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Patient } from './patient';
import { Doctor } from './doctor';

const db = new PrismaClient();

export const MedicalNotes = objectType({
  name: 'MedicalNotes',
  definition(t) {
    t.field(MedNotesType.id);
    t.field(MedNotesType.title);
    t.field(MedNotesType.date_noted);
    t.field(MedNotesType.med_notes);
    t.field(MedNotesType.doc_id);
    t.field('doctor', {
      type: Doctor,
      resolve(medicalNotes) {
        return db.doctor.findFirst({ where: { id: medicalNotes.doc_id } });
      },
    });
    t.field('patient', {
      type: Patient,
      resolve(medicalNotes) {
        return db.patient.findFirst({ where: { id: medicalNotes.patient_id } });
      },
    });
  },
});

export const MedNotesInput = inputObjectType({
  name: 'MedNotesInput',
  definition(t) {
    t.field(MedNotesType.title);
    t.field(MedNotesType.date_noted);
    t.field(MedNotesType.med_notes);
    t.field(MedNotesType.patient_id);
    t.field(MedNotesType.doc_id);
  },
});

export const AddMedNotes = mutationField('addMedNotes', {
  type: MedicalNotes,
  args: {
    newMedNotes: nonNull(MedNotesInput),
  },
  resolve(root, args: { newMedNotes: Prisma.MedicalNotesCreateInput }) {
    return db.medicalNotes.create({ data: args.newMedNotes });
  },
});

export const PatientMedNotes = queryField('patientMedNotes', {
  type: list(MedicalNotes),
  args: {
    patient_id: nonNull(intArg()),
  },
  resolve(root, args: {patient_id: Prisma.MedicalNotesWhereUniqueInput}) {
    return db.medicalNotes.findMany({
      where: { patient_id: args.patient_id as any },
    });
  },
});
