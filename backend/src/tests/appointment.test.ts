/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { Appointment, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { createAppointment, CreateAppointmentType } from '../appointment';

let mockCtx: MockContext;
let ctx: Context;

// eslint-disable-next-line no-use-before-define
beforeEach(() => {
  mockCtx = createMockContext();
  ctx = mockCtx as unknown as Context;
});

it('should test adding an appointment', async () => {
  const appointment: Appointment = {
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  };

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

// function beforeEach(arg0: () => void) {
//   throw new Error('Function not implemented.');
// }

// function expect(arg0: Prisma.Prisma__AppointmentClient<Appointment>) {
//   throw new Error('Function not implemented.');
// }
