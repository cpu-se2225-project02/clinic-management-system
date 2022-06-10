/* eslint-disable no-undef */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, intArg, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Referral as ReferralType } from 'nexus-prisma';
import { Context, context } from './context';
import { Doctor } from './doctor';
import { Patient } from './patient';
import { NexusGenInputs } from './generated/graphql-types';

const db = new PrismaClient();

export const Referral = objectType({
  name: 'Referral',
  definition(t) {
    t.field(ReferralType.id);
    t.field(ReferralType.hosp_name);
    t.field(ReferralType.doctor_id);
    t.field(ReferralType.patient_id);
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

export function getPatientReferrals(patientId: number, ctx: Context) {
  return ctx.db.referral.findMany({
    where: { patient_id: patientId },
  });
}

export const PatientReferrals = queryField('patientReferrals', {
  type: list(Referral),
  args: {
    patientID: nonNull(intArg()),
  },
  resolve: (root, args: { patientID: number }, ctx) => getPatientReferrals(args.patientID, context),
});

export const ReferralInput = inputObjectType({
  name: 'ReferralInput',
  definition(t) {
    t.field(ReferralType.hosp_name);
    t.field(ReferralType.doctor_id);
    t.field(ReferralType.patient_id);
  },
});

export const EditReferralInput = inputObjectType({
  name: 'EditReferralInput',
  definition(t) {
    t.field(ReferralType.doctor_id);
    t.field(ReferralType.hosp_name);
  },
});

export type CreatePatientReferralType = NexusGenInputs['ReferralInput'];
export function createPatientReferral(newReferral: CreatePatientReferralType, ctx: Context) {
  return ctx.db.referral.create({
    data: {
      ...newReferral,
    },
  });
}
export const AddReferral = mutationField('addReferral', {
  type: Referral,
  args: { newReferral: nonNull(ReferralInput) },
  resolve: (root, args, ctx) => createPatientReferral(args.newReferral, context),
});

export function deleteAReferral(referalId: number, ctx: Context) {
  return ctx.db.referral.delete({
    where: {
      id: referalId,
    },
  });
}
export const DeleteReferral = mutationField('deleteReferral', {
  type: Referral,
  args: {
    referralId: nonNull(intArg()),
  },
  resolve: (root, args, ctx) => deleteAReferral(args.referralId, ctx),
});

export function editAReferral(referalId: number, editedReferral: Prisma.ReferralUpdateInput, ctx: Context) {
  return ctx.db.referral.update({
    where: {
      id: referalId,
    },
    data: {
      ...editedReferral,
    },
  });
}

export const EditReferral = mutationField('editReferral', {
  type: Referral,
  args: {
    referralID: nonNull(intArg()),
    editedReferral: nonNull(EditReferralInput),
  },
  resolve: (root, args: { referralID: number, editedReferral: Prisma.ReferralUpdateInput }, ctx) => editAReferral(args.referralID, args.editedReferral, ctx),
});
