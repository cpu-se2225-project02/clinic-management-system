/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { MedicalHistory, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { getMedHistory, createMedHistory, deleteMedicalHistory } from '../medHistory';

let mockCtx: MockContext;
let ctx: Context;
const medicalHistory1: MedicalHistory = {
  diagnosis: 'fever',
  treatment_plan: 'cough syrup',
  description: 'Solmux syrup',
  id: 1,
  patient_id: 1,
};
beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});
it('should test creating of medical history', async () => {
  mockCtx.prisma.medicalHistory.create.mockResolvedValue(medicalHistory1);

  await expect(createMedHistory(medicalHistory1, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});

it('should test deleting a medical history', async () => {
  const id: number = 1;
  mockCtx.prisma.medicalHistory.delete.mockResolvedValue(medicalHistory1);

  await expect(deleteMedicalHistory(id, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});
