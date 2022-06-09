/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { Appointment, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import {
  createAppointment, deleteAppointment, getAllAppointments, getPatientAppointments, updateAppointment,
} from '../appointment';

let mockCtx: MockContext;
let ctx: Context;

const appointment1: Appointment = {
  id: 1,
  doc_id: 1,
  dt_end: 'Jan 1, 2022',
  dt_start: 'Jan 2, 2022',
  name: 'First Appointment',
  patient_id: 1,
};
const appointment2: Appointment = {
  id: 2,
  doc_id: 1,
  dt_end: 'Dec 1, 2022',
  dt_start: 'Dec 2, 2022',
  name: 'Second Appointment',
  patient_id: 3,
};

// function beforeEach(arg0: () => void) {
//   throw new Error('Function not implemented.');
// }

// function expect(arg0: any) {
//   throw new Error('Function not implemented.');
// }

beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test getting all appointments', async () => {
  mockCtx.prisma.appointment.findMany.mockResolvedValue([appointment1, appointment2]);
  await expect(getAllAppointments(ctx)).resolves.toEqual([{
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  }, {
    id: 2,
    doc_id: 1,
    dt_end: 'Dec 1, 2022',
    dt_start: 'Dec 2, 2022',
    name: 'Second Appointment',
    patient_id: 3,
  },
  ]);
});

it("should test getting a patient's appointments", async () => {
  const patientId: number = 1;
  mockCtx.prisma.appointment.findMany.mockResolvedValue([appointment1, appointment2]);
  await expect(getPatientAppointments(patientId, ctx)).resolves.toEqual([{
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  }, {
    id: 2,
    doc_id: 1,
    dt_end: 'Dec 1, 2022',
    dt_start: 'Dec 2, 2022',
    name: 'Second Appointment',
    patient_id: 3,
  },
  ]);
});

it('should test adding an appointment', async () => {
  mockCtx.prisma.appointment.create.mockResolvedValue(appointment1);

  await expect(createAppointment(appointment1, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});

it('should test updating an appointment', async () => {
  mockCtx.prisma.appointment.update.mockResolvedValue(appointment1);

  await expect(updateAppointment(appointment1, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});

it('should test deleting an appointment', async () => {
  const id: number = 1;
  mockCtx.prisma.appointment.delete.mockResolvedValue(appointment1);

  await expect(deleteAppointment(id, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});
