/* eslint-disable max-len */
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
  intArg,
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';
import { Appointment as AppointmentType } from 'nexus-prisma';
import { NexusGenInputs } from './generated/graphql-types';
import { Context } from './context';
import { Patient } from './patient';
import { Doctor } from './doctor';

export type CreateAppointmentType = NexusGenInputs['AppointmentInput'];

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
    t.field(AppointmentType.dt_start);
    t.field(AppointmentType.dt_end);
    t.field(AppointmentType.name);
    t.field(AppointmentType.doc_id);
    t.field('doctor', {
      type: Doctor,
      resolve(appointment) {
        return db.doctor.findFirst({
          where: { id: appointment.doc_id },
        });
      },
    });
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
    t.field(AppointmentType.name);
    t.field(AppointmentType.dt_start);
    t.field(AppointmentType.dt_end);
    t.field(AppointmentType.patient_id);
    t.field(AppointmentType.doc_id);
  },
});

export function createAppointment(newAppointment: CreateAppointmentType, ctx: Context) {
  return ctx.prisma.appointment.create({
    data: {
      ...newAppointment,
      name: newAppointment.name.toUpperCase(),
    },
  });
}

export const addAppointment = mutationField('addAppointment', {
  type: Appointment,
  args: {
    newAppointment: nonNull(AppointmentInput),
  },
  resolve: (root, args: { newAppointment: CreateAppointmentType}, ctx) => createAppointment(args.newAppointment, ctx),
});

export const editAppointment = mutationField('editAppointment', {
  type: Appointment,
  args: {
    editedAppointment: nonNull(AppointmentInput),
    appointmentID: nonNull(intArg()),
  },
  resolve(root, args: { editedAppointment: Prisma.AppointmentUpdateInput, appointmentID: Prisma.AppointmentWhereUniqueInput }) {
    return db.appointment.update({
      where: { id: args.appointmentID as any },
      data: args.editedAppointment,
    });
  },
});

export const DeleteAppointment = mutationField('deleteAppointment', {
  type: Appointment,
  args: {
    appID: nonNull(intArg()),
  },
  resolve(root, args: { appID: Prisma.PatientWhereUniqueInput }) {
    return db.appointment.delete({
      where: { id: args.appID as any },
    });
  },
});

export const SpecificAppointment = queryField('specificAppointment', {
  type: list(Appointment),
  args: {
    patientID: nonNull(intArg()),
  },
  resolve(root, args: { patientID: Prisma.AppointmentWhereUniqueInput }) {
    return db.appointment.findMany({
      where: { patient_id: args.patientID as any },
    });
  },
});
