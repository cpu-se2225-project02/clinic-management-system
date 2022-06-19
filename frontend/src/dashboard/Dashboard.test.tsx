/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';


describe('Dashboard', () => {
    it('displays dashboard', async () => {
        render(
            <Router>
                <Routes>
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </Router>,
        );
    });
    it('displays the current date', async () => {
        const { queryByTestId } = render(
            <Router>
                <Routes>
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </Router>,
        );
        expect(queryByTestId('showCurrentDate')).toBeCalled;
    });
    it('displays the total number of patient', async () => {
        const { queryByTestId } = render(
            <Router>
                <Routes>
                    <Route path="*" element={<Dashboard />} />
                </Routes>
            </Router>,
        );
        expect(queryByTestId('allPatients')).toBeCalled;
    });

    // it('adds payment', () => {
    //     const { getByRole } = render(<Dashboard />);
    //     const addPaymentBtn = getByRole(Button ,{ name: /addPaymentBtn/i });
    //     expect(addPaymentBtn).toBeEnabled();
        
    //   });
});


