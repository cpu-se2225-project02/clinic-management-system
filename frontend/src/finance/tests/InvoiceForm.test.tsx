/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InvoiceForm from '../InvoiceForm';

describe('Invoice Form', () => {
    it('renders correctly', async () => {
       render(
        <Router>
          <Routes>
            <Route path="*" element={<InvoiceForm/>}/>
          </Routes>
        </Router>,
      );
    });
  });



