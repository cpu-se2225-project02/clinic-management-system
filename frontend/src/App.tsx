// import LoginPage from "./login/LoginPage";

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Appointment from "./appointment/Appointment";
import Clinic from "./clinic/Clinic";
import Dashboard from "./dashboard/Dashboard";
import FinancePage from "./finance/FinancePage";
import PatientList from "./patient/PatientList";
import PatientRecord from "./patient/PatientRecord";
import LoginPage from "./login/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/appointments" element={<Appointment />} />
          <Route path="/patients" element={<PatientList />} />
          <Route path="/finance" element={<FinancePage />} />
          {/* <Route path="/login" element={<LoginPage/>}/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
