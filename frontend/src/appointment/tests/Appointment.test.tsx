/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from '../Appointment';


describe('Appointment Page', () => {
    it('renders correctly', async () => {
       render(
        <Router>
          <Routes>
            <Route path="*" element={<Appointment/>}/>
          </Routes>
        </Router>,
      );
    });
  });



