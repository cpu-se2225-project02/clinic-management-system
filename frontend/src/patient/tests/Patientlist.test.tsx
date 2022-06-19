/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, createClient } from 'urql';
import PatientList from '../PatientList';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'isomorphic-unfetch';

const client = createClient({
  url: 'http://localhost:8001/graphql',
});

describe('All Patients', () => {
  it('display certain patient name', async () => {
    const { findByText } = render(
      <Provider value={client}>
        <Router>
          <Routes>
            <Route path="*" element={<PatientList />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
    expect(await findByText('Jenny Rose')).toBeInTheDocument();
  });
});
