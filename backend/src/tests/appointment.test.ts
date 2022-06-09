/* eslint-disable no-undef */
import { Appointment } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { createAppointment, deleteAppointment, updateAppointment } from '../appointment';

let mockCtx: MockContext;
let ctx: Context;

const appointment: Appointment = {
  id: 1,
  doc_id: 1,
  dt_end: 'Jan 1, 2022',
  dt_start: 'Jan 2, 2022',
  name: 'First Appointment',
  patient_id: 1,
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

it('should test adding an appointment', async () => {
  mockCtx.prisma.appointment.create.mockResolvedValue(appointment);

  await expect(createAppointment(appointment, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});

it('should test updating an appointment', async () => {
  mockCtx.prisma.appointment.update.mockResolvedValue(appointment);

  await expect(updateAppointment(appointment, ctx)).resolves.toEqual({
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
  mockCtx.prisma.appointment.delete.mockResolvedValue(appointment);

  await expect(deleteAppointment(id, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});
