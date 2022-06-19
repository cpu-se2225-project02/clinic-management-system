/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Header from '../Header';

it('renders correctly', () => {
  const { queryByTestId } = render(<Header />);

  expect(queryByTestId('hdr-dropdown')).toBeTruthy();
  expect(queryByTestId('banner-text')).toBeTruthy();
});
