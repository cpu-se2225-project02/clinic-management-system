import { verify } from 'jsonwebtoken';
import { Context } from '../context';

export const APP_SECRET = 'appsecret321';

interface Token {
  userId: string
}

export const validEmail = (email: string) => {
  const regexp = /\/^(([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$\//;
  return regexp.test(email);
};

// eslint-disable-next-line consistent-return
export function getUserId(context: Context) {
  const authHeader = context.req.get('Authorization');
  if (authHeader) {
    const token = authHeader.replace('Bearer ', '');
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && Number(verifiedToken.userId);
  }
}
