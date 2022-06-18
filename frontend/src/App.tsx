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
import InvoiceForm from './finance/InvoiceForm';
import LoginPage from './authentication/LoginPage';
import PatientRecord from './patient/PatientRecord';
import SingUpPage from './authentication/SignupPage';

const client = createClient({
  url: 'http://localhost:8001/graphql',
});
let express = require('express'),
    path = require('path');
var app = express();
let server = require('http').Server(app);

app.use(express.static(path.join(__dirname)));

app.get('/', function(req: any, res: { sendStatus: (arg0: number) => void; }, next: any){
    res.sendStatus(200);
});

app.get('/blog.html', function(req: any, res: { sendFile: (arg0: any) => void; },next: any){
    res.sendFile(path.join(__dirname+"/blog.html"));
});

app.post('/contact', function(req: any, res: any, next: any){

});
server.listen('8000', function() {
    console.log("App is running on port 8000");
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
          <Route path="/register" element={<SingUpPage />} />
          <Route path="/patient_record/:id" element={<PatientRecord />} />
          <Route path="/invoice/:id" element={<InvoiceForm />} />
        </Routes>
      </Router>
    </UrqlProvider>
  );
}

export default App;
