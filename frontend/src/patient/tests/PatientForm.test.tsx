/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import PatientForm from '../PatientForm';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('Patient Form', () => {
    it('renders correctly', async () => {
       render(<PatientForm />);
    });
  });