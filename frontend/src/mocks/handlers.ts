/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-extraneous-dependencies */
// src/mocks/handlers.js
import { graphql } from 'msw';
import { AllPatientsQuery, AllPatientsQueryVariables } from '../queries.generated';

export const handlers = [
  graphql.query<AllPatientsQuery, AllPatientsQueryVariables>('AllPatients', (req, res, ctx) => {
    const { con } = req.variables;
    if (con === 'a-z') {
      return res(
        ctx.data({
          patients: [
            {
              id: 1,
              f_name: 'Jenny Rose',
              l_name: 'Suelan',
              m_name: 'Manimbayan',
              suffix: '',
              sex: 'Female',
              age: 20,
              address: 'Cabatuan, Iloilo',
              constactNo: '09636261878',
            },
            {
              id: 20,
              f_name: 'Hermione',
              l_name: 'Granger',
              m_name: 'Bright',
              suffix: null,
              sex: 'Female',
              age: 20,
              address: 'Privet Drive',
              constactNo: '093763527901',
            },
          ],
        }),
      );
    }
    return res(
      ctx.status(200),
      ctx.data({
        patients: [
          {
            id: 20,
            f_name: 'Hermione',
            l_name: 'Granger',
            m_name: 'Bright',
            suffix: null,
            sex: 'Female',
            age: 20,
            address: 'Privet Drive',
            constactNo: '093763527901',
          },
          {
            id: 1,
            f_name: 'Jenny Rose',
            l_name: 'Suelan',
            m_name: 'Manimbayan',
            suffix: '',
            sex: 'Female',
            age: 20,
            address: 'Cabatuan, Iloilo',
            constactNo: '09636261878',
          },
        ],
      }),
    );
  }),
];
