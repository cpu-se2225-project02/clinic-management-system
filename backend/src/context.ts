import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const prisma = new PrismaClient();
export interface Context {
  prisma: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}

export type MockContext = {
  prisma: DeepMockProxy<PrismaClient>
}

export const createMockContext = (): MockContext => ({
  prisma: mockDeep<PrismaClient>(),
});

export const createContext = (req: any) => ({
  ...req,
  prisma,
});
