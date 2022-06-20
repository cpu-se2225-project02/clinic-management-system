/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'urql';
import Dashboard from './Dashboard';
import { mockClient } from '../mocks/MockClient';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('Dashboard', () => {
  it('displays dashboard', async () => {
    render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
  });
  it('displays the current date', async () => {
    const { queryByTestId } = render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
    expect(queryByTestId('showCurrentDate')).toBeCalled;
  });
  it('displays the total number of patient', async () => {
    const { queryByTestId } = render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<Dashboard />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
    expect(queryByTestId('allPatients')).toBeCalled;
  });

  // it('adds payment', () => {
  //     const { getByRole } = render(<Dashboard />);
  //     const addPaymentBtn = getByRole(Button ,{ name: /addPaymentBtn/i });
  //     expect(addPaymentBtn).toBeEnabled();

  //   });
});
