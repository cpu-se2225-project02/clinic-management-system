/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { Doctor as DoctorType } from 'nexus-prisma';
import { PrismaClient } from '@prisma/client';
import { list, objectType, queryField } from 'nexus';

const db = new PrismaClient();

export const Doctor = objectType({
  name: 'Doctor',
  definition(t) {
    t.field(DoctorType.id);
    t.field(DoctorType.doc_name);
    t.field(DoctorType.appointments);
  },
});

export const allDoctors = queryField('allDoctors', {
  type: list(Doctor),
  resolve() {
    return db.doctor.findMany();
  },
});
