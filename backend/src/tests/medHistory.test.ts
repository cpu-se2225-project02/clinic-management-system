/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { MedicalHistory, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import {
  getPatientMedHistories, createMedHistory, deleteMedicalHistory, editMedicalHistory,
} from '../medHistory';

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
  mockCtx.db.medicalHistory.create.mockResolvedValue(medicalHistory1);

  await expect(createMedHistory(medicalHistory1, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});

it('should test editing a medical history', async () => {
  const medicalHistoryId: number = 1;
  mockCtx.db.medicalHistory.update.mockResolvedValue(medicalHistory1);

  await expect(editMedicalHistory(medicalHistoryId, medicalHistory1, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});

it('should test deleting a medical history', async () => {
  const id: number = 1;
  mockCtx.db.medicalHistory.delete.mockResolvedValue(medicalHistory1);

  await expect(deleteMedicalHistory(id, ctx)).resolves.toEqual({
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  });
});

const medHis1 = {
  diagnosis: 'fever',
  treatment_plan: 'cough syrup',
  description: 'Solmux syrup',
  id: 1,
  patient_id: 1,
};

const medHis2 = {
  diagnosis: 'tachycardia',
  treatment_plan: 'cough syrup',
  description: 'Solmux syrup',
  id: 1,
  patient_id: 1,
};

it('should test getting a patient medical history', async () => {
  const patientId: number = 1;

  mockCtx.db.medicalHistory.findMany.mockResolvedValue([medHis1, medHis2]);

  await expect(getPatientMedHistories(patientId, ctx)).resolves.toEqual([{
    diagnosis: 'fever',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  }, {
    diagnosis: 'tachycardia',
    treatment_plan: 'cough syrup',
    description: 'Solmux syrup',
    id: 1,
    patient_id: 1,
  }]);
});
