UsertyUserType/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable import/order */
import { permissions } from './permissions';
import { APP_SECRET, getUserId } from './utils';
import { compare, hash } from 'bcryptjs';
import { User as UserType } from 'nexus-prisma';
import { sign } from 'jsonwebtoken';
import { applyMiddleware } from 'graphql-middleware';
import {
  intArg,
  makeSchema,
  nonNull,
  objectType,
  stringArg,
  inputObjectType,
  arg,
  asNexusMethod,
  enumType,
  list,
  queryField,
  mutationField,
} from 'nexus';
import { DateTimeResolver } from 'graphql-scalars';
import { Context } from './context';

export const DateTime = asNexusMethod(DateTimeResolver, 'date');

const User = objectType({
  name: 'User',
  definition(t) {
    t.field(UserType.f_name);
    t.field(UserType.l_name);
    t.field(UserType.email);
    t.field(UserType.password);
  },
});

export const allUsers = queryField('allUsers', {
  type: list(User),
  resolve: (parent, args, context) => context.prisma.user.findMany()
});


export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token');
    t.field(UserType);
  },
});


export const signUp = mutationField('signup', {
  type: AuthPayload,
  args: {
    f_name: stringArg(),
    l_name: stringArg(),
    email: nonNull(stringArg()),
    password: nonNull(stringArg()),
  },
  resolve: async (_parent, args, context: Context) => {
    const hashedPassword = await hash(args.password, 10);
    const user = await context.prisma.user.create({
      data: {
       given_name: args.f_name,
       email:  args.email,
       password: args.password
      },
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user,
    };
  },
});

// const Query = objectType({
//   name: 'Query',
//   definition(t) {
//     t.nonNull.list.nonNull.field('allUsers', {
//       type: list(User),
//       resolve: (_parent, _args, context: Context) => {
//         return context.prisma.user.findMany();
//       },
//     });

//     t.nullable.field('me', {
//       type: 'User',
//       resolve: (parent, args, context: Context) => {
//         const userId = getUserId(context);
//         return context.prisma.user.findUnique({
//           where: {
//             id: Number(userId),
//           },
//         });
//       },
//     });
//   },
// });

// const Mutation = objectType({
//   name: 'Mutation',
//   definition(t) {
//     t.field('signup', {
//       type: 'AuthPayload',
//       args: {
//         f_name: stringArg(),
//         l_name: stringArg(),
//         email: nonNull(stringArg()),
//         password: nonNull(stringArg()),
//       },
//       resolve: async (_parent, args, context: Context) => {
//         const hashedPassword = await hash(args.password, 10);
//         const user = await context.prisma.user.create({
//           data: {
//             name: args.name,
//             email: args.email,
//             password: hashedPassword,
//           },
//         });
//         return {
//           token: sign({ userId: user.id }, APP_SECRET),
//           user,
//         };
//       },
//     });

//     t.field('login', {
//       type: 'AuthPayload',
//       args: {
//         email: nonNull(stringArg()),
//         password: nonNull(stringArg()),
//       },
//       resolve: async (_parent, { email, password }, context: Context) => {
//         const user = await context.prisma.user.findUnique({
//           where: {
//             email,
//           },
//         });
//         if (!user) {
//           throw new Error(`No user found for email: ${email}`);
//         }
//         const passwordValid = await compare(password, user.password);
//         if (!passwordValid) {
//           throw new Error('Invalid password');
//         }
//         return {
//           token: sign({ userId: user.id }, APP_SECRET),
//           user,
//         };
//       },
//     });
// });