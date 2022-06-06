import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';
import { Context } from '../context';

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isGuest: rule()((_parent, _args, context: Context) => context === null),
  // isPostOwner: rule()(async (_parent, args, context) => {
  //   const userId = getUserId(context);
  //   const author = await context.prisma.post
  //     .findUnique({
  //       where: {
  //         id: Number(args.id),
  //       },
  //     })
  //     .author();
  //   return userId === author.id;
  // }),
};

// eslint-disable-next-line import/prefer-default-export
export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser,
  },
  Mutation: {
    signup: rules.isGuest,
  },
});
