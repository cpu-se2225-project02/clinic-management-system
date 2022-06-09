import { Bill } from '@prisma/client';
import { Context, createMockContext, MockContext } from '../context';
import { createPayment } from '../payment';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as any as Context;
});

it('should test adding of payment', async () => {
  const payment: Bill = {
    id: 1,
    ammnt_cost: 200,
    ammnt_paid: 200,
    paymnt_dt: '2022-03-02 9:00:00',
    patient_id: 1,
  };

  mockCtx.prisma.bill.create.mockResolvedValue(payment);

  await expect(createPayment(payment, ctx)).resolves.toEqual({
    id: 1,
    ammnt_cost: 200,
    ammnt_paid: 200,
    paymnt_dt: '2022-03-02 9:00:00',
    patient_id: 1,
  });
});
