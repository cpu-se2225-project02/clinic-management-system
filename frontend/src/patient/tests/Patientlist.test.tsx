/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'urql';
import { never } from 'wonka';
import PatientList from '../PatientList';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'isomorphic-unfetch';

const mockClient = {
  executeQuery: jest.fn(() => never),
  executeMutation: jest.fn(() => never),
  executeSubscription: jest.fn(() => never),
};

describe('All Patients', () => {
  it('triggers the query', async () => {
    render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<PatientList />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );

    expect(mockClient.executeQuery).toBeCalledTimes(1);
  });
});
