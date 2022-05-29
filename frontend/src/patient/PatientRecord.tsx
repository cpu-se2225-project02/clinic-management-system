/* eslint-disable react/require-default-props */
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
import { MdInfoOutline } from 'react-icons/md';
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
import Referral from './referral/Referral';

interface OpProps {
  accountToggle?: boolean
}

export default function PatientRecord({ accountToggle = false } : OpProps) {
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [PrescriptionBtn, setPrescBtn] = useState(false);
  const [AccountBtn, setAccBtn] = useState(false);
  const [MedNotesBtn, setMedNotesBtn] = useState(false);
  const [AppointmentBtn, setAppointmentBtn] = useState(accountToggle);
  const [ReferralBtn, setReferralBtn] = useState(false);
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patiendID,
    },
  });

  const { data } = allPatients;

  return (
    <Container fluid>
      <Row>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <Header />
      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="patient-list-box p-0 mt-3 border border-2 border-dark right-side">
          <Row>
            <Col xs={12}>
              <h5 className="h5">
                <MdInfoOutline className="appointment-icon" />
                Patient Record
              </h5>
            </Col>
          </Row>

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
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => setReferralBtn(!ReferralBtn)}
            >
              Referrals
            </Button>
            {ReferralBtn && <Referral pID={data?.specificPatient?.id} />}
          </Col>
          <Col className="list border d-grid gap-2">
            <Button variant="primary" className="patient-btns">
              Medical History
            </Button>
          </Col>
          <Col className="list border d-grid gap-2">
            <Button
              variant="primary"
              className="patient-btns"
              onClick={() => setAccBtn(!AccountBtn)}
            >
              Accounts
            </Button>
            {AccountBtn && <PatientAccount pID={data?.specificPatient?.id} />}
          </Col>

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
            {AppointmentBtn && <SpecificAppointment pId={data?.specificPatient?.id} />}
          </Col>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}
