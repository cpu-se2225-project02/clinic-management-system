import { compare, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { applyMiddleware } from 'graphql-middleware';
import {
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  asNexusMethod,
} from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import { PrismaClient } from '@prisma/client';
import { APP_SECRET, getUserId } from './utils';
import { Context } from './context';

const db = new PrismaClient();

const DateTime = asNexusMethod(DateTimeResolver, 'date');

export const Query = objectType({
  name: 'Query',
  definition(t) {
    t.nullable.field('me', {
      type: 'User',
      resolve: (parent, args, context: Context) => {
        const userId = getUserId(context);
        return context.prisma.user.findUnique({
          where: {
            id: Number(userId),
          },
        });
      },
    });
  },
});

export const Mutation = objectType({
  name: 'Mutation',
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        f_name: nonNull(stringArg()),
        l_name: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, args, context: Context) => {
        const hashedPassword = await hash(args.password, 10);
        const user = await context.prisma.user.create({
          data: {
            f_name: args.f_name,
            l_name: args.l_name,
            email: args.email,
            password: hashedPassword,
          },
        });
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        };
      },
    });

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_parent, { email, password }, context: Context) => {
        const user = await context.prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }
        const passwordValid = await compare(password, user.password);
        if (!passwordValid) {
          throw new Error('Invalid password');
        }
        return {
          token: sign({ userId: user.id }, APP_SECRET),
          user,
        };
      },
    });
  },
});

export const User = objectType({
  name: 'User',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('f_name');
    t.nonNull.string('l_name');
    t.nonNull.string('email');
  },
});

export const UserUniqueInput = inputObjectType({
  name: 'UserUniqueInput',
  definition(t) {
    t.int('id');
    t.string('email');
  },
});

export const UserCreateInput = inputObjectType({
  name: 'UserCreateInput',
  definition(t) {
    t.nonNull.string('f_name');
    t.nonNull.string('l_name');
    t.nonNull.string('email');
  },
});

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field('user', { type: 'User' });
  },
});

// const schemaWithoutPermissions = makeSchema({
//   types: [
//     Query,
//     Authenticate,
//     User,
//     AuthPayload,
//     UserUniqueInput,
//     UserCreateInput,
//     DateTime,
//   ],
//   outputs: {
//     schema: path.join(__dirname, '/schema.graphql'),
//     typegen: path.join(__dirname, '/generated/graphql-types.ts'),
//   },
//   contextType: {
//     module: require.resolve('./context'),
//     export: 'Context',
//   },
//   sourceTypes: {
//     modules: [
//       {
//         module: '@prisma/client',
//         alias: 'prisma',
//       },
//     ],
//   },
// });

// export const user = applyMiddleware(schemaWithoutPermissions, permissions);
