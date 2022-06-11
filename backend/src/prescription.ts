/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable space-before-blocks */
/* eslint-disable linebreak-style */
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
import { Prescription as PrescriptionType } from 'nexus-prisma';
import { Patient } from './patient';
import { NexusGenInputs } from './generated/graphql-types';
import { context, Context } from './context';

const db = new PrismaClient();

export const Prescription = objectType({
  name: 'Prescription',
  definition(t) {
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dos);
    t.field(PrescriptionType.id);
    t.field(PrescriptionType.patient_id);
    t.field('patient', {
      type: Patient,
      resolve(prescription) {
        return db.patient.findFirst({ where: { id: prescription.patient_id } });
      },
    });
  },
});

// read
export function getPrescriptions(ctx: Context) {
  return ctx.db.prescription.findMany();
}

export const prescriptions = queryField('prescriptions', {
  type: list(Prescription),
  resolve: (root, args, ctx) => getPrescriptions(context),
});

export function getPatientPrescription(patientId: number, ctx: Context) {
  return ctx.db.prescription.findMany({
    where: { patient_id: patientId },
  });
}

export const patientPrescriptions = queryField('patientPrescriptions', {
  type: list(Prescription),
  args: {
    patientId: nonNull(intArg()),
  },
  resolve: (root, args, ctx) => getPatientPrescription(args.patientId, context),
});

export type AddPrescInput = NexusGenInputs['AddPrescriptionInput']
export function createPrescription(newPrescription: AddPrescInput, ctx: Context) {
  return ctx.db.prescription.create({
    data: {
      ...newPrescription,
    },
  });
}

export const AddPrescriptionInput = inputObjectType({
  name: 'AddPrescriptionInput',
  definition(t) {
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dos);
    t.field(PrescriptionType.patient_id);
  },
});

export const AddPrescription = mutationField('addPrescription', {
  type: Prescription,
  args: {
    newPrescription: nonNull(AddPrescriptionInput),
  },
  resolve: (root, args, ctx) => createPrescription(args.newPrescription, context),
});

export type UpdatePrescriptionInput = NexusGenInputs['EditPrescriptionInput'];
export function editPrescription(thePrescription: UpdatePrescriptionInput, ctx: Context) {
  return ctx.db.prescription.update({
    data: {
      ...thePrescription,
    },
    where: {
      id: thePrescription.id,
    },
  });
}

export const EditPrescriptionInput = inputObjectType({
  name: 'EditPrescriptionInput',
  definition(t) {
    t.field(PrescriptionType.id);
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dos);
    t.field(PrescriptionType.patient_id);
  },
});

export const EditPrescription = mutationField('editPrescription', {
  type: Prescription,
  args: {
    editedPrescription: nonNull(EditPrescriptionInput),
  },

  resolve: (root, args, ctx) => editPrescription(args.editedPrescription, context),
});

export function deletePrescription(prescriptionId: Prisma.PrescriptionWhereUniqueInput, ctx:Context) {
  return ctx.db.prescription.delete({
    where: {
      id: prescriptionId as number,
    },
  });
}

export const DeletePrescription = mutationField('deletePrescription', {
  type: Prescription,
  args: {
    prescriptionId: nonNull(intArg()),
  },
  resolve(root, args, ctx) {
    return db.prescription.delete({
      where: { id: args.prescriptionId as any },
    });
  },
});
