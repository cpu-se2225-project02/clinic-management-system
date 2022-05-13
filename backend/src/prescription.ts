/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
  inputObjectType,
  mutationField,
  nonNull,
  objectType,
} from 'nexus';

import { Prisma, PrismaClient } from '@prisma/client';
import { Prescription as PrescriptionType } from 'nexus-prisma';

const db = new PrismaClient();

export const Prescription = objectType({
  name: 'Prescription',
  definition(t) {
    t.field(PrescriptionType.id);
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dosage);
  },
});

export const PrescriptionInput = inputObjectType({
  name: 'PrescriptionInput',
  definition(t) {
    t.field(PrescriptionType.id);
    t.field(PrescriptionType.pres_name);
    t.field(PrescriptionType.pres_dosage);
  },
});

export const AddPresctiption = mutationField('addPrescription', {
  type: Prescription,
  args: {
    newPrescription: nonNull(PrescriptionInput),
  },
  resolve(root, args: { newPatient: Prisma.PrescriptionCreateInput }) {
    return db.prescription.create({ data: args.newPatient });
  },
});
