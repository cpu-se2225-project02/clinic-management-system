/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LoginPage from './LoginPage';

it('renders correctly', () => {
  const { queryByPlaceholderText } = render(<LoginPage />);

  expect(queryByPlaceholderText('Enter email address')).toBeTruthy();
  expect(queryByPlaceholderText('Enter password')).toBeTruthy();
});

describe('Input value', () => {
  it('Email Updates on change', () => {
    const { queryByPlaceholderText } = render(<LoginPage />);

    const emailInput = queryByPlaceholderText('Enter email address') as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: 'jennyrose@gmail.com' } });

    expect(emailInput.value).toBe('jennyrose@gmail.com');
  });

  it('Password updates on change', () => {
    const { queryByPlaceholderText } = render(<LoginPage />);

    const passwordInput = queryByPlaceholderText('Enter password') as HTMLInputElement;

    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(passwordInput.value).toBe('password');
  });
});
