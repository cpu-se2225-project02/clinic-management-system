/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React, { SetStateAction } from 'react';
import { fireEvent, queryByPlaceholderText, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BillForm from '../BillForm';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('Bill Form', () => {
  it('renders correctly', async () => {
     render(
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
// describe('Input value', () => {
//     it('updates amount cost', () => {
//       const { queryByPlaceholderText } = render(<BillForm />);
  
//       const amountInput = screen.queryByPlaceholderText('Amount (to the nearest peso)') as HTMLInputElement; 
//       fireEvent.change(amountInput, { target: { value: "500" } });
//       expect(amountInput.value).toBe("500");
//     });
// });