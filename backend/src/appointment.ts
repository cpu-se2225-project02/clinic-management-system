/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
import {

  queryField,
} from 'nexus';

export const hello = queryField('hi', {
  type: 'String',
  resolve() {
    return 'Hi World!';
  },
});
