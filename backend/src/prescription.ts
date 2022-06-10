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
import { Context } from './context';

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
  return ctx.prisma.prescription.findMany();
}

export const prescriptions = queryField('prescriptions', {
  type: list(Prescription),
  resolve: (root, args, ctx) => getPrescriptions(ctx)
});

export function getPatientPrescription(patientId: number, ctx: Context) {
  return ctx.prisma.referral.findMany({
    where: { patient_id: patientId },
  });
}

export const patientPrescriptions = queryField('patientPrescriptions', {
  type: list(Prescription),
  args: {
    patientId: nonNull(intArg()),
  },
  resolve(root, args) {
    return db.prescription.findMany({
      where: {
        patient_id: args.patientId,
      },
    });
  },
});

export type CreatePrescriptionType = NexusGenInputs['PrescriptionInput'];
export function createPrescription(newPrescription: CreatePrescriptionType, ctx: Context) {
  return ctx.prisma.prescription.create({
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
export const EditPrescriptionInput = inputObjectType({
  name: 'EditPrescriptionInput',
  definition(t) {
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dos);
  },
});

export const AddPrescription = mutationField('addPrescription', {
  type: Prescription,
  args: {
    newPrescription: nonNull(AddPrescriptionInput),
  },
  resolve: (root, args: { newPrescription: Prisma.PrescriptionCreateInput }, ctx) => createPrescription(args.newPrescription, ctx),
});

export function editPrescription(thePrescription: Prisma.PrescriptionUpdateInput, prescriptionId: Prisma.PrescriptionWhereUniqueInput, ctx: Contex) {
  return ctx.prisma.prescription.update({
    data: {
      ...thePrescription,
    },
    where: {
      id: prescriptionId as any,
    },
  });
}

export const EditPrescription = mutationField('editPrescription', {
  type: Prescription,
  args: {
    prescriptionId: nonNull(intArg()),
    editedPrescription: nonNull(EditPrescriptionInput),
  },

  // eslint-disable-next-line max-len
  resolve(root, args) {
    return db.prescription.update({
      where: { id: args.prescriptionId as any },
      data: args.editedPrescription,
    });
  },
});

export function deletePrescription(prescriptionId: Prisma.PrescriptionWhereUniqueInput, ctx:Context) {
  return ctx.prisma.prescription.delete({
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
  resolve(root, args) {
    return db.prescription.delete({
      where: { id: args.prescriptionId as any },
    });
  },
});
