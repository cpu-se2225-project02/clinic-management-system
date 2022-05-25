/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable radix */
import React, { useState } from 'react';
import {
  Container, Row, Col, Button,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './PatientRecord.css';
import { useQuery } from 'urql';
import { GetPatientDocument } from '../queries.generated';
import PatientInformation from './PatientInformation';
// eslint-disable-next-line no-unused-vars
import Prescription from './prescription/Prescription';
// import PrescriptionForm from './prescription/PrescriptionForm';
import MedicalNotes from './mednotes/MedicalNotes';
import PatientAccount from './account/PatientAccount';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import SpecificAppointment from './appointment/SpecificAppointment';
import Footer from '../common/Footer';

export default function PatientRecord() {
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [PrescriptionBtn, setPrescBtn] = useState(false);
  const [AccountBtn, setAccBtn] = useState(false);
  const [MedNotesBtn, setMedNotesBtn] = useState(false);
  const [AppointmentBtn, setAppointmentBtn] = useState(false);
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patiendID,
    },
  });

  const { data } = allPatients;

  return (
    <Container fluid className="PatientInfo mb-5">
      <Row>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Header />
      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>
        <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark">
          <div className="card border-dark mb-3">
            <div className="h5">
              <div className="row">
                <div className="col-sm-2">
                  <span className="material-symbols-outlined">
                    info
                  </span>
                </div>
                <div className="col-sm-10">Patient Information</div>
              </div>
            </div>
            <Col>
              <PatientInformation pId={data?.specificPatient?.id} />
            </Col>
            <Col className="list border d-grid gap-2">
              <Button
                variant="primary"
                className="patient-btns"
                onClick={() => setPrescBtn(!PrescriptionBtn)}
              >
                Prescriptions
              </Button>
              {PrescriptionBtn && <Prescription pID={data?.specificPatient?.id} />}
            </Col>
            <Col className="list border d-grid gap-2">
              <Button variant="primary" className="patient-btns">
                Medical History
              </Button>
            </Col>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns" onClick={() => setAccBtn(!AccountBtn)}>
                  Accounts
                </Button>
              </Col>
            </Row>
            <Row>
              {AccountBtn && <PatientAccount pID={data?.specificPatient?.id} />}
            </Row>
            <Col className="list border d-grid gap-2">
              <Button
                variant="primary"
                className="patient-btns"
                onClick={() => setMedNotesBtn(!MedNotesBtn)}
              >
                Medical Notes
              </Button>
              {MedNotesBtn && <MedicalNotes pId={data?.specificPatient?.id} />}
            </Col>
            <Col className="list border d-grid gap-2">
              <Button
                variant="primary"
                className="patient-btns"
                onClick={() => setAppointmentBtn(!AppointmentBtn)}
              >
                Appointments
              </Button>
              {AppointmentBtn && <SpecificAppointment pId={data?.specificPatient?.id} /> }
            </Col>
          </div>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
