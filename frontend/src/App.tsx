import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Appointment from './appointments/Appointment';
import PatientList from './patient/PatientList';

function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/appointments" element={<Appointment/>}/>
            <Route path="/patients" element={<PatientList/>}/>
          </Routes>
      </Router>
      
    </>
  );
}

export default App;
