/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import { Appointment, Prisma } from '@prisma/client';
import { MockContext, Context, createMockContext } from '../context';
import { addAppointmen } from '../appointment';

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

  await expect(addAppointmen(appointment, ctx)).resolves.toEqual({
    id: 1,
    doc_id: 1,
    dt_end: 'Jan 1, 2022',
    dt_start: 'Jan 2, 2022',
    name: 'First Appointment',
    patient_id: 1,
  });
});
<<<<<<< HEAD
=======

// async/await can be used.
// it('works with async/await', async () => {
//   expect.assertions(1);
//   const data = await user.getUserName(4);
//   expect(data).toEqual('Mark');
// });

// // async/await can also be used with `.resolves`.
// it('works with async/await and resolves', async () => {
//   expect.assertions(1);
//   await expect(user.getUserName(5)).resolves.toEqual('Paul');
// });

function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

function expect(arg0: Prisma.Prisma__AppointmentClient<Appointment>) {
  throw new Error('Function not implemented.');
}
>>>>>>> main
