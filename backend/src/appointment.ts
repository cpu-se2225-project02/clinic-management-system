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
export type UpdateAppointmentType = NexusGenInputs['UpdateAppointmentInput'];

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
    t.field(AppointmentType.patient_id);
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

export function getAllAppointments(ctx: Context) {
  return ctx.db.appointment.findMany();
}

export const appointments = queryField('appointments', {
  type: list(Appointment),
  resolve: (root, args, ctx) => getAllAppointments(ctx),
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
export const UpdateAppointmentInput = inputObjectType({
  name: 'UpdateAppointmentInput',
  definition(t) {
    t.field(AppointmentType.id);
    t.field(AppointmentType.name);
    t.field(AppointmentType.dt_start);
    t.field(AppointmentType.dt_end);
    t.field(AppointmentType.patient_id);
    t.field(AppointmentType.doc_id);
  },
});

export function createAppointment(newAppointment: CreateAppointmentType, ctx: Context) {
  return ctx.db.appointment.create({
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

export function updateAppointment(updatedAppointment: UpdateAppointmentType, ctx: Context) {
  return ctx.db.appointment.update({
    where: { id: updatedAppointment.id },
    data: {
      ...updatedAppointment,
    },
  });
}
export const editAppointment = mutationField('editAppointment', {
  type: Appointment,
  args: {
    editedAppointment: nonNull(UpdateAppointmentInput),
  },
  resolve: (root, args: { editedAppointment: UpdateAppointmentType}, ctx) => updateAppointment(args.editedAppointment, ctx),
});

export function deleteAppointment(appointmentId: number, ctx: Context) {
  return ctx.db.appointment.delete({
    where: { id: appointmentId },
  });
}

export const DeleteAppointment = mutationField('deleteAppointment', {
  type: Appointment,
  args: {
    appID: nonNull(intArg()),
  },
  resolve: (root, args: { appID: number }, ctx) => deleteAppointment(args.appID, ctx),
});

export function getPatientAppointments(patientID: number, ctx: Context) {
  return ctx.db.appointment.findMany({
    where: { patient_id: patientID as any },
  });
}
export const SpecificAppointment = queryField('specificAppointment', {
  type: list(Appointment),
  args: {
    patientID: nonNull(intArg()),
  },
  resolve: (root, args: { patientID: number }, ctx) => getPatientAppointments(args.patientID, ctx),
});
