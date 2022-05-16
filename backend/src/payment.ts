import {
  inputObjectType, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Payment as PaymentType } from 'nexus-prisma';
import { Patient } from './patient';

const db = new PrismaClient();

export const hii = queryField('high', {
  type: 'String',
  resolve() {
    return 'Hiiiiiigh';
  },
});

export const Payment = objectType({
  name: 'Payment',
  definition(t) {
    t.field(PaymentType.id);
    t.field(PaymentType.paymnt_dt);
    t.field(PaymentType.ammnt_cost);
    t.field(PaymentType.ammnt_payed);
    t.field('patient', {
      type: Patient,
      resolve(payment) {
        return db.patient.findFirst({ where: { id: payment.patient_id } });
      },
    });
  },
});

export const PaymentInput = inputObjectType({
  name: 'PaymentInput',
  definition(t) {
    t.field(PaymentType.paymnt_dt);
    t.field(PaymentType.ammnt_cost);
    t.field(PaymentType.ammnt_payed);
    t.field(PaymentType.patient_id);
  },
});

export const addPayment = mutationField('addPayment', {
  type: Payment,
  args: {
    newPayment: nonNull(PaymentInput),
  },
  resolve(root, args: { newPayment: Prisma.PaymentCreateInput }) {
    return db.payment.create({ data: args.newPayment });
  },
});
