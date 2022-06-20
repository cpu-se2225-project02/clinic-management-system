import React from 'react';
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
            <Route path="*" element={<InvoicePopup />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
  });
});
