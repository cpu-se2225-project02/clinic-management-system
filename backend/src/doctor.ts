/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Doctor as DoctorType } from 'nexus-prisma';
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Appointment } from './appointment';
import { NexusGenInputs } from './generated/graphql-types';
import { Context } from './context';

const db = new PrismaClient();

export const Doctor = objectType({
  name: 'Doctor', 
  definition(t) {
    t.field(DoctorType.id);
    t.field(DoctorType.doc_name);
    t.field('appointments', {
      type: list(Appointment),
      resolve(doctor) {
        return db.appointment.findMany({ where: { id: doctor.id } });
      },
    });
  },
});

export function getAllDoctors(ctx: Context) {
  return ctx.prisma.doctor.findMany();
}

export const allDoctors = queryField('allDoctors', {
  type: list(Doctor),
  resolve: (root, args, ctx) => getAllDoctors(ctx),
});

export const DoctorInput = inputObjectType({
  name: 'DoctorInput',
  definition(t) {
    t.field(DoctorType.doc_name);
  },
});

export type CreateDoctorType = NexusGenInputs['DoctorInput'];
export function createDoctor(newDoctor: CreateDoctorType, ctx: Context) {
  return ctx.prisma.doctor.create({
    data: {
      ...newDoctor,
    },
  });
}

export const addDoctor = mutationField('addDoctor', {
  type: Doctor,
  args: { newDoctor: nonNull(DoctorInput) },
  resolve: (root, args: { newDoctor: CreateDoctorType }, ctx) => createDoctor(args.newDoctor, ctx),
});
