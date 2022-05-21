/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Doctor as DoctorType } from 'nexus-prisma';
import { Prisma, PrismaClient } from '@prisma/client';
import {
  inputObjectType, list, mutationField, nonNull, objectType, queryField,
} from 'nexus';
import { Appointment } from './appointment';

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

export const allDoctors = queryField('allDoctors', {
  type: list(Doctor),
  resolve() {
    return db.doctor.findMany();
  },
});

export const DoctorInput = inputObjectType({
  name: 'DoctorInput',
  definition(t) {
    t.field(DoctorType.doc_name);
  },
});

export const addDoctor = mutationField('addDoctor', {
  type: Doctor,
  args: { newDoctor: nonNull(DoctorInput) },
  resolve(root, args : { newDoctor: Prisma.DoctorCreateInput}) {
    return db.doctor.create({ data: args.newDoctor });
  },
});
