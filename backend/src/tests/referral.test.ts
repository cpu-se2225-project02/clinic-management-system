/* eslint-disable no-undef */
import { Prisma, Referral } from '@prisma/client';
import { Context, createMockContext, MockContext } from '../context';
import {
  createPatientReferral, deleteAReferral, editAReferral, EditReferral, getPatientReferrals,
} from '../referral';

let ctx: Context;
let mockCtx: MockContext;

const referral1: Referral = {
  id: 1,
  hosp_name: 'Iloilo Mission Hospital',
  doctor_id: 1,
  patient_id: 1,
};
const referral2: Referral = {
  id: 2,
  hosp_name: 'Iloilo Mission Impossible Hospital',
  doctor_id: 2,
  patient_id: 1,
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as any as Context;
});

it("should test getting patient's referrrals", async () => {
  const patientId: number = 1;
  mockCtx.db.referral.findMany.mockResolvedValue([referral1, referral2]);

  await expect(getPatientReferrals(patientId, ctx)).resolves.toEqual([{
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  }, {
    id: 2,
    hosp_name: 'Iloilo Mission Impossible Hospital',
    doctor_id: 2,
    patient_id: 1,

  }]);
});
it('should test deleting a referral', async () => {
  mockCtx.db.referral.delete.mockResolvedValue(referral1);

  const refId = 1;
  await expect(deleteAReferral(refId, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});

it('should test adding of referral', async () => {
  mockCtx.db.referral.create.mockResolvedValue(referral1);

  await expect(createPatientReferral(referral1, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});

it('should test editing a referral', async () => {
  const referrralId: number = 1;
  mockCtx.db.referral.update.mockResolvedValue(referral1);

  await expect(editAReferral(referrralId, referral1, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});
