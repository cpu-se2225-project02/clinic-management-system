/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-undef */
import React, { SetStateAction } from 'react';
import {
  render,
} from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'urql';
import { mockClient } from '../../mocks/MockClient';
import PatientAccountPopup from '../PatientAccountPopup';

describe('Invoice Popup', () => {
  it('renders correctly', async () => {
    render(
      <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route
              path="*"
              element={(
                <PatientAccountPopup
                  invPop={function (value: SetStateAction<boolean>): void {}}
                  invForm
                />
)}
            />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
  });
});
