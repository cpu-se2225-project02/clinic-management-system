/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import BillForm from '../BillForm';

it('renders correctly', () => {
  const { queryByTestId } = render(<BillForm addPaymentBtn={ } payForm={false} />);

  expect(queryByTestId('modal-body')).toBeTruthy();
});

// describe('Dashboard Link', () => {
//   it('Can be clicked', () => {
//     const { queryByTestId } = render(<Router><Sidebars /></Router>);

//     const dashboardBtn = queryByTestId('dashboard-link') as HTMLInputElement;

//     fireEvent.click(dashboardBtn);

//     expect(dashboardBtn).toBeTruthy();
//   });
// });
// describe('Clinic Link', () => {
//   it('Can be clicked', () => {
//     const { queryByTestId } = render(<Router><Sidebars /></Router>);

//     const clinicBtn = queryByTestId('clinic-link') as HTMLInputElement;

//     fireEvent.click(clinicBtn);

//     expect(clinicBtn).toBeTruthy();
//   });
// });
// describe('Appointments Link', () => {
//   it('Can be clicked', () => {
//     const { queryByTestId } = render(<Router><Sidebars /></Router>);

//     const appointmentsBtn = queryByTestId('appointments-link') as HTMLInputElement;

//     fireEvent.click(appointmentsBtn);

//     expect(appointmentsBtn).toBeTruthy();
//   });
// });
// describe('Patients Link', () => {
//   it('Can be clicked', () => {
//     const { queryByTestId } = render(<Router><Sidebars /></Router>);

//     const patientsBtn = queryByTestId('patients-link') as HTMLInputElement;

//     fireEvent.click(patientsBtn);

//     expect(patientsBtn).toBeTruthy();
//   });
// });
// describe('Finance Link', () => {
//   it('Can be clicked', () => {
//     const { queryByTestId } = render(<Router><Sidebars /></Router>);

//     const financeBtn = queryByTestId('finance-link') as HTMLInputElement;

//     fireEvent.click(financeBtn);

//     expect(financeBtn).toBeTruthy();
//   });
// });
