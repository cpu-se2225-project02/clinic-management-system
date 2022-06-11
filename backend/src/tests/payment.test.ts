/* eslint-disable no-undef */
import { Bill } from '@prisma/client';
import { Context, createMockContext, MockContext } from '../context';
import {
  createBill, CreateBillType, createPayment, Invoice, allPayments, getAllPayments,
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

// it('shoudl test adding a bill', async () => {
//   const bill: CreateBillType = {
//     patient_id: 1,
//     ammnt_cost: 200,
//   };

//   mockCtx.db.bill.create.mockResolvedValue(bill);

//   expect(createBill(bill, ctx)).resolves.toEqual({
//     patient_id: 1,
//     ammnt_cost: 200,
//   });
// });
// it('should test getting invoice'), async () => {
//   const unpaid: CreateBillType = {
//     patient_id: 1,
//     ammnt_cost: 200,
//   };
// };
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
