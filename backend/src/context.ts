/* eslint-disable linebreak-style */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}

export function createContext(req: any) {
  return {
    ...req,
    prisma,
  };
}
