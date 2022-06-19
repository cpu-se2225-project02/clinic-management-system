import React from 'react';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientAccountPopup from '../PatientAccountPopup';

describe('Invoice Popup', () => {
    it('renders correctly', async () => {
       render(
        <Router>
          <Routes>
            <Route path="*" element={<PatientAccountPopup/>}/>
          </Routes>
        </Router>,
      );
    });
  });
