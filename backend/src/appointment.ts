/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
  list,
  objectType,
  queryField,
  mutationField,
  nonNull,
  inputObjectType,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Appointment as AppointmentType } from 'nexus-prisma';
import { Patient } from './patient';

const db = new PrismaClient();

export const hi = queryField('hi', {
  type: 'String',
  resolve() {
    return 'Hi World!';
  },
});

export const Appointment = objectType({
  name: 'Appointment',
  definition(t) {
    t.field(AppointmentType.id);
    t.field(AppointmentType.date_time);
    t.field('patient', {
      type: Patient,
      resolve(appointment) {
        return db.patient.findFirst({ where: { id: appointment.patient_id } });
      },
    });
  },
});

export const appointments = queryField('appointments', {
  type: list(Appointment),
  resolve() {
    return db.appointment.findMany();
  },
});

export const AppointmentInput = inputObjectType({
  name: 'AppointmentInput',
  definition(t) {
    t.field(AppointmentType.date_time);
    t.field(AppointmentType.patient_id);
  },
});

export const addAppointment = mutationField('addAppointment', {
  type: Appointment,
  args: {
    newAppointment: nonNull(AppointmentInput),
  },
  resolve(root, args: { newAppointment: Prisma.AppointmentCreateInput }) {
    return db.appointment.create({ data: args.newAppointment });
  },
});
