/* eslint-disable no-undef */
/* eslint-disable eol-last */
import { Patient } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { createPatient } from '../patient';

let mockCtx: MockContext;
let ctx: Context;

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding of a patient', async () => {
  const patient: Patient = {
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

  mockCtx.prisma.patient.create.mockResolvedValue(patient);

  await expect(createPatient(patient, ctx)).resolves.toEqual({
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