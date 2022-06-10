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
  return ctx.db.referral.findMany({
    where: { patient_id: patientId },
  });
}
// NOTE: Where is getAPrescription? You mean getPatientPrescription? Pls fix
// export const patientPrescriptions = queryField('patientPrescriptions', {
//   type: list(Prescription),
//   args: {
//     patientId: nonNull(intArg()),
//   },
//   resolve: (root, args: {prescriptionId: Prisma.PrescriptionWhereUniqueInput}, ctx) => getAPrescription(args.prescriptionId, ctx),
// });

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

export function editPrescription(thePrescription: Prisma.PrescriptionUpdateInput, prescriptionId: Prisma.PrescriptionWhereUniqueInput, ctx: Context) {
  return ctx.db.prescription.update({
    data: {
      ...thePrescription,
    },
    where: {
      id: prescriptionId as number,
    },
  });
}

// NOTE: No EditPrescriptionInput
// export const EditPrescription = mutationField('editPrescription', {
//   type: Prescription,
//   args: {
//     prescriptionId: nonNull(intArg()),
//     editedPrescription: nonNull(EditPrescriptionInput),
//   },

//   resolve(root, args) {
//     return db.prescription.update({
//       where: { id: args.prescriptionId as any },
//       data: args.editedPrescription,
//     });
//   },
// });

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
