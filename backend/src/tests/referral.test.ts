/* eslint-disable no-undef */
import { Prisma, Referral } from '@prisma/client';
import { Context, createMockContext, MockContext } from '../context';
import { createPatientReferral, deleteAReferral, editAReferral, EditReferral } from '../referral';

let ctx: Context;
let mockCtx: MockContext;

const referral: Referral = {
  id: 1,
  hosp_name: 'Iloilo Mission Hospital',
  doctor_id: 1,
  patient_id: 1,
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as any as Context;
});

it('should test deleting a referral', async () => {
  mockCtx.prisma.referral.delete.mockResolvedValue(referral);

  const refId: Prisma.ReferralWhereUniqueInput = {
    id: 1,
  };
  await expect(deleteAReferral(refId, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});

it('should test adding of referral', async () => {
  mockCtx.prisma.referral.create.mockResolvedValue(referral);

  await expect(createPatientReferral(referral, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});

it('should test editing a referral', async () => {
  mockCtx.prisma.referral.edit.mockResolvedValue(referral);

  await expect(editAReferral(referral, ctx)).resolves.toEqual({
    id: 1,
    hosp_name: 'Iloilo Mission Hospital',
    doctor_id: 1,
    patient_id: 1,
  });
});
