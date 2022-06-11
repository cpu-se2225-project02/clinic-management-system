/* eslint-disable no-undef */
import { Bill } from '@prisma/client';
import { Context, createMockContext, MockContext } from '../context';
import {
  createBill, CreateBillType, createPayment, Invoice, allPayments, getAllPayments, getInvoicesOf, getAccountOf,
} from '../payment';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as any as Context;
});
const payment1: Bill = {
  id: 1,
  ammnt_cost: 200,
  ammnt_paid: 200,
  paymnt_dt: '2022-03-02 9:00:00',
  patient_id: 1,
};
const payment2: Bill = {
  id: 2,
  ammnt_cost: 300,
  ammnt_paid: 300,
  paymnt_dt: '2022-04-02 9:00:00',
  patient_id: 2,
};

it('should test adding of payment', async () => {
  const payment: Bill = {
    id: 1,
    ammnt_cost: 200,
    ammnt_paid: 200,
    paymnt_dt: '2022-03-02 9:00:00',
    patient_id: 1,
  };

  mockCtx.db.bill.create.mockResolvedValue(payment);

  await expect(createPayment(payment, ctx)).resolves.toEqual({
    id: 1,
    ammnt_cost: 200,
    ammnt_paid: 200,
    paymnt_dt: '2022-03-02 9:00:00',
    patient_id: 1,
  });
});

it('should test getting all payments', async () => {
  mockCtx.db.bill.findMany.mockResolvedValue([payment1, payment2]);
  await expect(getAllPayments(ctx)).resolves.toEqual([{
    id: 1,
    ammnt_cost: 200,
    ammnt_paid: 200,
    paymnt_dt: '2022-03-02 9:00:00',
    patient_id: 1,
  }, {
    id: 2,
    ammnt_cost: 300,
    ammnt_paid: 300,
    paymnt_dt: '2022-04-02 9:00:00',
    patient_id: 2,
  },
  ]);
});

const unpaid1: Bill = {
  id: 1,
  ammnt_cost: 200,
  ammnt_paid: null,
  paymnt_dt: null,
  patient_id: 1,
};
const unpaid2: Bill = {
  id: 2,
  ammnt_cost: 300,
  ammnt_paid: null,
  paymnt_dt: null,
  patient_id: 1,
};
const unpaid3: Bill = {
  id: 3,
  ammnt_cost: 400,
  ammnt_paid: null,
  paymnt_dt: null,
  patient_id: 1,
};

it('should test getting all invoices', async () => {
  ctx.db.bill.findMany.mockResolvedValue([unpaid1, unpaid2, unpaid3]);

  await expect(getInvoicesOf({ patientId: 1 }, ctx)).resolves.toEqual([{
    ...unpaid1,
  }, {
    ...unpaid2,
  }, {
    ...unpaid3,
  }]);
});

it('should test the account of the patient', async () => {
  ctx.db.bill.findMany.mockResolvedValue([unpaid1, unpaid2, unpaid3, payment1]);

  await expect(getAccountOf({ patientId: 1 }, ctx)).resolves.toEqual([{
    ...unpaid1,
  }, {
    ...unpaid2,
  }, {
    ...unpaid3,
  }, {
    ...payment1,
  }]);
});
