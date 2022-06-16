/* eslint-disable linebreak-style */
import {
  inputObjectType, intArg, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Bill as BillType } from 'nexus-prisma';
import { Patient } from './patient';
import { NexusGenInputs } from './generated/graphql-types';
import { Context, context } from './context';

const db = new PrismaClient();

export const Bill = objectType({
  name: 'Bill',
  definition(t) {
    t.field(BillType.id);
    t.field(BillType.paymnt_dt);
    t.field(BillType.ammnt_cost);
    t.field(BillType.ammnt_paid);
    t.field(BillType.patient_id);
    t.field('patient', {
      type: Patient,
      resolve(payment) {
        return db.patient.findFirst({ where: { id: payment.patient_id } });
      },
    });
  },
});

export function getAllPayments(ctx: Context) {
  return ctx.db.bill.findMany({ orderBy: { patient_id: 'asc' } });
}

export const allPayments = queryField('allPayments', {
  type: list(Bill),
  resolve: (root, args, ctx) => getAllPayments(context),
});

export const getAccountOf = (args: any, ctx: Context) => {
  const result = ctx.db.bill.findMany({ where: { patient_id: args.patientId } });
  return result;
};
export const account = queryField('account', {
  type: list(Bill),
  args: { patientId: nonNull(intArg()) },
  resolve: (root, args, ctx) => getAccountOf(args.patientId, ctx),
});

export const PaymentInput = inputObjectType({
  name: 'PaymentInput',
  definition(t) {
    t.field(BillType.paymnt_dt);
    t.field(BillType.ammnt_cost);
    t.field(BillType.ammnt_paid);
    t.field(BillType.patient_id);
  },
});

export type CreatePaymentType = NexusGenInputs['PaymentInput'];
export function createPayment(newPayment: CreatePaymentType, ctx: Context) {
  return ctx.db.bill.create({
    data: {
      ...newPayment,
    },
  });
}

export const addPayment = mutationField('addPayment', {
  type: Bill,
  args: {
    newPayment: nonNull(PaymentInput),
  },
  resolve: (root, args, ctx) => createPayment(args.newPayment, context),
});

export const BillInput = inputObjectType({
  name: 'BillInput',
  definition(t) {
    t.field(BillType.ammnt_cost);
    t.field(BillType.patient_id);
  },
});

export type CreateBillType = NexusGenInputs['BillInput'];
export function createBill(newBill: CreateBillType, ctx: Context) {
  return ctx.db.bill.create({
    data: {
      ...newBill,
    },
  });
}
export const AddBill = mutationField('addBill', {
  type: Bill,
  args: {
    newBill: nonNull(BillInput),
  },
  resolve: (root, args, ctx) => createBill(args.newBill, context),
});

export const getInvoicesOf = (patientId: number, ctx: Context) => ctx.db.bill.findMany({
  where: {
    patient_id: patientId,
    ammnt_paid: null,
    paymnt_dt: null,
  },
});
export const Invoice = queryField('invoice', {
  type: list(Bill),
  args: { patientId: nonNull(intArg()) },
  resolve: (root, args, ctx) => getInvoicesOf(args.patientId, ctx),
});
