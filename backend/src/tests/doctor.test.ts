/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { Doctor, Patient, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { addDoctor, createDoctor, getAllDoctors } from '../doctor';

let mockCtx: MockContext;
let ctx: Context;
const doctor1: Doctor = {
  id: 1,
  doc_name: 'Chloe Belle Estilo',
};

const doctor2: Doctor = {
  id: 2,
  doc_name: 'Shem Jehro Jondanero',
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a doctor', async () => {
  mockCtx.db.doctor.create.mockResolvedValue(doctor1);

  await expect(createDoctor(doctor1, ctx)).resolves.toEqual({
    id: 1,
    doc_name: 'Chloe Belle Estilo',
  });
});

it('should test getting all doctors', async () => {
  mockCtx.db.doctor.findMany.mockResolvedValue([doctor1, doctor2]);

  await expect(getAllDoctors(ctx)).resolves.toEqual([{
    id: 1,
    doc_name: 'Chloe Belle Estilo',
  },
  {
    id: 2,
    doc_name: 'Shem Jehro Jondanero',
  }]);
});
