/* eslint-disable linebreak-style */
/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */

import { verify } from 'jsonwebtoken';
import { Context } from './user';

export const APP_SECRET = 'appsecret321';

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const authHeader = context.req.get('Authorization');
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && Number(verifiedToken.userId);
  }
}
