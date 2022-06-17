/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('renders correctly', () => {
  const { queryByTestId } = render(<Dashboard />);

  expect(queryByTestId('dashboardPage')).toBeTruthy()
  // expect(queryByTestId('hdr-banner')).toBeTruthy();
});
 