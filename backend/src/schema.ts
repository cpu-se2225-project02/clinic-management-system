/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {
  queryField, 
} from 'nexus';
import { Prisma, PrismaClient } from '@prisma/client';

const db = new PrismaClient();

export const hello = queryField('helloWorld', {
  type: 'String',
  resolve() {
    return 'Hello World!';
  },
});
