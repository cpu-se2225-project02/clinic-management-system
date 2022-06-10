/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { Patient, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import {
  createPatient, deleteAPatient, editAPatient, getAPatient, getAllPatients,
} from '../patient';

let mockCtx: MockContext;
let ctx: Context;
const patient1: Patient = {
  id: 1,
  f_name: 'Glenn Rose',
  l_name: 'Suelan',
  m_name: 'Manimbayan',
  email: 'glennrosesuelan@gmail.com',
  constactNo: '09636261878',
  age: 20,
  birthdate: '2001-07-09',
  address: 'Cabatuan, Iloilo',
  suffix: null,
  sex: 'Female',
};

const patient2: Patient = {
  id: 1,
  f_name: 'Jenny Rose',
  l_name: 'Suelan',
  m_name: 'Manimbayan',
  email: 'jennyrosesuelan@gmail.com',
  constactNo: '09636261878',
  age: 20,
  birthdate: '2001-07-09',
  address: 'Cabatuan, Iloilo',
  suffix: null,
  sex: 'Female',
};

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a patient', async () => {
  mockCtx.db.patient.create.mockResolvedValue(patient2);

  await expect(createPatient(patient2, ctx)).resolves.toEqual({
    id: 1,
    f_name: 'Jenny Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'jennyrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  });
});

it('should test deleting a patient', async () => {
  const patientId: Prisma.PatientWhereUniqueInput = {
    id: 1,
  };
  mockCtx.db.patient.delete.mockResolvedValue(patient2);

  await expect(deleteAPatient(patientId, ctx)).resolves.toEqual({
    id: 1,
    f_name: 'Jenny Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'jennyrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  });
});

it('should test editing a patient', async () => {
  const patientId: Prisma.PatientWhereUniqueInput = {
    id: 1,
  };

  mockCtx.db.patient.update.mockResolvedValue(patient1);

  await expect(editAPatient(patient1, patientId, ctx)).resolves.toEqual({
    id: 1,
    f_name: 'Glenn Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'glennrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  });
});

it('should test getting specific patient', async () => {
  mockCtx.db.patient.findUnique.mockResolvedValue(patient2);

  const patientId: Prisma.PatientWhereUniqueInput = {
    id: 1,
  };

  await expect(getAPatient(patientId, ctx)).resolves.toEqual({
    id: 1,
    f_name: 'Jenny Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'jennyrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  });
});

it('should test getting all patients', async () => {
  mockCtx.db.patient.findMany.mockResolvedValue([patient2, patient1]);

  await expect(getAllPatients(ctx)).resolves.toEqual([{
    id: 1,
    f_name: 'Jenny Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'jennyrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  }, {
    id: 1,
    f_name: 'Glenn Rose',
    l_name: 'Suelan',
    m_name: 'Manimbayan',
    email: 'glennrosesuelan@gmail.com',
    constactNo: '09636261878',
    age: 20,
    birthdate: '2001-07-09',
    address: 'Cabatuan, Iloilo',
    suffix: null,
    sex: 'Female',
  }]);
});