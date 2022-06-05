/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import { rule, shield } from 'graphql-shield';
import { getUserId } from '../utils';
import { Context } from '../context';

const rules = {
  isAuthenticatedUser: rule()((_parent, _args, context: Context) => {
    const userId = getUserId(context);
    return Boolean(userId);
  }),
  isPostOwner: rule()(async (_parent, args, context) => {
    const userId = getUserId(context);
    const author = await context.prisma.post
      .findUnique({
        where: {
          id: Number(args.id),
        },
      })
      .author();
    return userId === author.id;
  }),
};

export const permissions = shield({
  Query: {

  },
  Mutation: {

  },
});
