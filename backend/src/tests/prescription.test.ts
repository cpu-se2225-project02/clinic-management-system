/* eslint-disable max-len */
/* eslint-disable no-undef */
import { Prescription, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import {
  createPrescription, deletePrescription, editPrescription, getPrescriptions, getPatientPrescription,
} from '../prescription';

let mockCtx: MockContext;
let ctx: Context;
const prescription1: Prescription = {
  id: 1,
  patient_id: 1,
  pres_name: 'Citirezin',
  pres_dos: 10,
};

const prescription2: Prescription = {
  id: 1,
  patient_id: 1,
  pres_name: 'Biogesic',
  pres_dos: 4,
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a prescription', async () => {
  mockCtx.prisma.prescription.create.mockResolvedValue(prescription1);

  await expect(createPrescription(prescription1, ctx)).resolves.toEqual({
    id: 1,
    patient_id: 1,
    pres_name: 'Citirezin',
    pres_dos: 10,
  });
});

it('should test editing a prescription', async () => {
  const prescriptionId: Prisma.PrescriptionWhereUniqueInput = {
    id: 1,
  };

  mockCtx.prisma.prescription.update.mockResolvedValue(prescription2);

  await expect(editPrescription(prescription2, prescriptionId, ctx)).resolves.toEqual({
    id: 1,
    patient_id: 1,
    pres_name: 'Biogesic',
    pres_dos: 4,
  });
});

it('should test getting all prescriptions', async () => {
  mockCtx.prisma.prescription.findMany.mockResolvedValue([prescription1, prescription2]);

  await expect(getPrescriptions(ctx)).resolves.toEqual([{
    id: 1,
    patient_id: 1,
    pres_name: 'Citirezin',
    pres_dos: 10,

  }, {
    id: 1,
    patient_id: 1,
    pres_name: 'Biogesic',
    pres_dos: 4,

  }]);
});

it('should test deleting a prescription', async () => {
  const prescriptionId: Prisma.PrescriptionWhereUniqueInput = {
    id: 1,
  };
  mockCtx.prisma.prescription.delete.mockResolvedValue(prescription2);

  await expect(deletePrescription(prescriptionId, ctx)).resolves.toEqual({
    id: 1,
    patient_id: 1,
    pres_name: 'Biogesic',
    pres_dos: 4,
  });
});

it('should test getting prescriptions', async () => {
  mockCtx.prisma.prescription.findMany.mockResolvedValue([prescription1, prescription2]);

  await expect(getPrescriptions(ctx)).resolves.toEqual([{
    id: 1,
    patient_id: 1,
    pres_name: 'Citirezin',
    pres_dos: 10,
  },
  {
    id: 1,
    patient_id: 1,
    pres_name: 'Biogesic',
    pres_dos: 4,
  }]);
});
