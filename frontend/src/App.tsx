import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Appointment from './appointments/Appointment';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route path="/appointments" element={<Appointment/>}/>
          </Routes>
      </Router>
    </>
  );
}

export default App;
