import { PrismaClient } from '@prisma/client';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

const db = new PrismaClient();

export interface Context {
  db: PrismaClient
  req: any // HTTP request carrying the `Authorization` header
}

export type MockContext = {
  db: DeepMockProxy<PrismaClient>
}

export const createMockContext = () => ({
  db: mockDeep<PrismaClient>(),
});

export const createContext = (req: any) => ({
  ...req,
  db,
});

export const context: Context = {
  db,
  req: {},
};
