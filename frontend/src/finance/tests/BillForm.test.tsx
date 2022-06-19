/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { SetStateAction } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillForm from '../BillForm';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('All Patients', () => {
  it('get all patients', async () => {
    const {  } = render(
      <Router>
        <Routes>
          <Route path="*" element={<BillForm addPaymentBtn={function (value: SetStateAction<boolean>): void {
                    throw new Error('Function not implemented.');
                } } payForm={false} />} />
        </Routes>
      </Router>,
    );
  });
});
