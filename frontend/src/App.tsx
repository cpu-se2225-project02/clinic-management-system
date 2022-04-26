import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Appointment from './appointment/Appointment';
import Clinic from './clinic/Clinic';
import Dashboard from './dashboard/Dashboard';
import PatientList from './patient/PatientList';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/clinic" element={<Clinic />} />
            <Route path="/appointments" element={<Appointment/>}/>
            <Route path="/patients" element={<PatientList/>}/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
