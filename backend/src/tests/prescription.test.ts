/* eslint-disable no-undef */
/* eslint-disable eol-last */

import { Prescription, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { getPatientPrescription, getPrescriptions } from '../prescription';

let mockCtx: MockContext;
let ctx: Context;

const prescription1: Prescription = {
  pres_name: 'amoxicillin',
  pres_dos: 7,
  id: 1,
  patient_id: 1
};

const prescription2: Prescription = {
  pres_name: 'asdf',
  pres_dos: 9,
  id: 2,
  patient_id: 2
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as any as Context;
});

it('should test getting prescriptions', async () => {
  mockCtx.prisma.prescription.findMany.mockResolvedValue([prescription1, prescription2]);

  await expect(getPrescriptions(ctx)).resolves.toEqual([{
    pres_name: 'amoxicillin',
    pres_dos: 7,
    id: 1, 
    patient_id: 1
  }, 
  {
    pres_name: 'asdf',
    pres_dos: 9,
    id: 2, 
    patient_id: 2
  }]);
});
