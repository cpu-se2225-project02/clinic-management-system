import { objectType, queryField } from 'nexus';
import { PrismaClient } from '@prisma/client';
import { Payment as PaymentType } from 'nexus-prisma';
import { Patient } from './patient';

const db = new PrismaClient();

export const hii = queryField('hii', {
  type: 'String',
  resolve() {
    return 'Hiiiiii';
  },
});

export const Payment = objectType({
  name: 'Payment',
  definition(t) {
    t.field(PaymentType.id);
    t.field(PaymentType.paymnt_dt);
    t.field(PaymentType.ammnt_cost);
    t.field(PaymentType.ammnt_payed);
    t.field(PaymentType.change);
    t.field('patient', {
      type: Patient,
      resolve(payment) {
        db.patient.findFirst({ where: { id: payment.patient_id } });
      },
    });
  },
});
