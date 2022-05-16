/* eslint-disable linebreak-style */
// import LoginPage from "./login/LoginPage";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { createClient, Provider as UrqlProvider } from 'urql';
import Appointment from './appointment/Appointment';
import Clinic from './clinic/Clinic';
import Dashboard from './dashboard/Dashboard';
import FinancePage from './finance/FinancePage';
import PatientList from './patient/PatientList';

import LoginPage from './login/LoginPage';
import PatientRecord from './patient/PatientRecord';

const client = createClient({
  url: 'http://localhost:8001/graphql',
});

function App() {
  return (
    <UrqlProvider value={client}>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/patients/*" element={<PatientList />} />
          <Route path="/finance" element={<FinancePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/patient_record/:id" element={<PatientRecord />} />
        </Routes>
      </Router>
    </UrqlProvider>
  );
}

export default App;
