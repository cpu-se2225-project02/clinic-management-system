/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, intArg, list, mutationField, nonNull, objectType, queryField,
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

export const PatientReferrals = queryField('patientReferrals', {
  type: list(Referral),
  args: {
    patientID: nonNull(intArg()),
  },
  resolve(root, args: { patientID: Prisma.ReferralWhereUniqueInput}) {
    return db.referral.findMany({
      where: { patient_id: args.patientID as any },
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

export const EditReferralInput = inputObjectType({
  name: 'EditReferralInput',
  definition(t) {
    t.field(ReferralType.doctor_id);
    t.field(ReferralType.hosp_name);
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

export const DeleteReferral = mutationField('deleteReferral', {
  type: Referral,
  args: {
    referralId: nonNull(intArg()),
  },
  resolve(root, args: {referralId: Prisma.ReferralWhereUniqueInput}) {
    return db.referral.delete({
      where: { id: args.referralId as any },
    });
  },
});

export const EditReferral = mutationField('editReferral', {
  type: Referral,
  args: {
    referralID: nonNull(intArg()),
    editedReferral: nonNull(EditReferralInput),
  },
  resolve(root, args: {referralID: Prisma.ReferralWhereUniqueInput, editedReferral: Prisma.ReferralUpdateInput}) {
    return db.referral.update({
      where: { id: args.referralID as any },
      data: args.editedReferral,
    });
  },
});