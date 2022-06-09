/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { Doctor, Patient, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { addDoctor, createDoctor } from '../doctor';

let mockCtx: MockContext;
let ctx: Context;
const doctor1: Doctor = {
  id: 1,
  doc_name: 'Chloe Belle Estilo',
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a doctor', async () => {
  mockCtx.prisma.doctor.create.mockResolvedValue(doctor1);

  await expect(createDoctor(doctor1, ctx)).resolves.toEqual({
    id: 1,
    doc_name: 'Chloe Belle Estilo',
  });
});