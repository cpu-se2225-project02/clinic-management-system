/* eslint-disable linebreak-style */
import {
  inputObjectType, intArg, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Bill as BillType } from 'nexus-prisma';
import { Patient } from './patient';
import { NexusGenInputs } from './generated/graphql-types';
import { Context } from './context';

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

export const allPayments = queryField('allPayments', {
  type: list(Bill),
  resolve() {
    return db.bill.findMany({ orderBy: { patient_id: 'asc' } });
  },
});

export const account = queryField('account', {
  type: list(Bill),
  args: { patientId: nonNull(intArg()) },
  resolve(root, args) {
    return db.bill.findMany({ where: { patient_id: args.patientId } });
  },
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
  return ctx.prisma.bill.create({
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
  resolve: (root, args:
    { newPayment: Prisma.BillCreateInput }, ctx) => createPayment(args.newPayment, ctx),
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
  return ctx.prisma.bill.create({
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
  resolve: (root, args:
    { newBill: Prisma.BillCreateInput }, ctx) => createBill(args.newBill, ctx),
});

export const getInvoices = (args: any, _ctx: Context) => db.bill.findMany({
  where: { patient_id: args.patientId, ammnt_paid: null },
});
export const Invoice = queryField('invoice', {
  type: list(Bill),
  args: { patientId: nonNull(intArg()) },
  resolve: (root, args, ctx) => getInvoices(args.patientId, ctx),
});
 