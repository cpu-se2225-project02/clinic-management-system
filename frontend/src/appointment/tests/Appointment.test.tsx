/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {  render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appointment from '../Appointment';
import { Provider } from 'urql';
import { mockClient } from '../../mocks/MockClient';


describe('Appointment Page', () => {
    it('renders correctly', async () => {
       render(
        <Provider value={mockClient as any}>
        <Router>
          <Routes>
            <Route path="*" element={<Appointment/>}/>
          </Routes>
        </Router>,
        </Provider>
      );
    });
  });



