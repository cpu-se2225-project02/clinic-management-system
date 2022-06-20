/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-vars */
import React, { SetStateAction } from 'react';
import {
  render,
} from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'urql';
import { mockClient } from '../../mocks/MockClient';
import InvoicePopup from '../InvoicePopup';

describe('Invoice Popup', () => {
  it('renders correctly', async () => {
    render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<InvoicePopup invPop={function (value: SetStateAction<boolean>): void {}} invForm />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
  });
});
