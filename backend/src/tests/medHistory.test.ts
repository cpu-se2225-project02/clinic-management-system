/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { MedicalHistory, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { getMedHistory, editMedHistory } from '../medHistory';

let mockCtx: MockContext;
let ctx: Context;
const medicalHistory1: MedicalHistory = {
  diagnosis: 'fever',
  treatment_plan: 'cough syrup',
  description: 'Solmux syrup',
  id: 1,
  patient_id: 1,
};

it('should test editing a medical History', async () => {
  const medicalhistoryId: Prisma.MedicalHistoryWhereUniqueInput = {
    id: 1,
  };

  mockCtx.prisma.medicalHistory.update.mockResolvedValue(medicalHistory1);

  await expect(editMedHistory(medicalHistory1, medicalhistoryId, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});
