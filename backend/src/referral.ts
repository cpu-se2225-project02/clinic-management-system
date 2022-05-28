/* eslint-disable import/prefer-default-export */
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, mutationField, nonNull, objectType,
} from 'nexus';
import { Referral as ReferralType } from 'nexus-prisma';
import { Doctor } from './doctor';
import { Patient } from './patient';

const db = new PrismaClient();

export const Referral = objectType({
  name: 'Referral',
  definition(t) {
    t.field(ReferralType.id);
    t.field(ReferralType.hosp_name);
    t.field('doctor', {
      type: Doctor,
      resolve(referral) {
        return db.doctor.findFirst({ where: { id: referral.doctor_id } });
      },
    });
    t.field('patient', {
      type: Patient,
      resolve(referral) {
        return db.patient.findFirst({ where: { id: referral.patient_id } });
      },
    });
  },
});

export const ReferralInput = inputObjectType({
  name: 'ReferralInput',
  definition(t) {
    t.field(ReferralType.hosp_name);
    t.field(ReferralType.doctor_id);
    t.field(ReferralType.patient_id);
  },
});

export const AddReferral = mutationField('addReferral', {
  type: Referral,
  args: {
    newReferral: nonNull(ReferralInput),
  },
  resolve(root, args: {newReferral: Prisma.ReferralCreateInput}) {
    return db.referral.create({ data: args.newReferral });
  },

});
