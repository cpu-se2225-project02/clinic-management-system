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
import PrescriptionForm from './prescription/PrescriptionForm';
import MedicalNotes from './mednotes/MedicalNotes';

export default function PatientRecord() {
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [PrescriptionBtn, setPrescBtn] = useState(false);
  const [MedNotesBtn, setMedNotesBtn] = useState(false);

  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patiendID,
    },
  });

  const { data } = allPatients;

  return (
    <Container className="PatientInfo">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      {/* <Col xs={2} className="sidebar-box p-0" /> */}
      {/* <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark"> */}
      {/* <Row> */}
      <Col xs={12}>
        <div className="h5">
          <span className="material-symbols-outlined">
            info
            PATIENT INFORMATION
          </span>
          {/* {params.id}
          {' '}
          {data?.specificPatient?.f_name}
          {' '}
          {data?.specificPatient?.l_name} */}
        </div>
      </Col>
      {/* </Row> */}
      <Row>
        <Col className="list border d-grid gap-2">
          <PatientInformation pId={data?.specificPatient?.id} />
        </Col>
      </Row>
      <Row>
        <Col className="list border d-grid gap-2">
          <Button
            variant="primary"
            className="patient-btns"
            onClick={() => setPrescBtn(!PrescriptionBtn)}
          >
            Prescriptions
          </Button>
        </Col>
      </Row>
      <Row>
        {PrescriptionBtn && <PrescriptionForm pID={data?.specificPatient?.id} />}
      </Row>
      <Row>
        <Col className="list border d-grid gap-2">
          <Button variant="primary" className="patient-btns">
            Medical History
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="list border d-grid gap-2">
          <Button variant="primary" className="patient-btns">
            Account
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="list border d-grid gap-2">
          <Button
            variant="primary"
            className="patient-btns"
            onClick={() => setMedNotesBtn(!MedNotesBtn)}
          >
            Medical Notes
          </Button>
        </Col>
      </Row>
      <Row>
        {MedNotesBtn && <MedicalNotes pId={data?.specificPatient?.id} />}
      </Row>
      <Row>
        <Col className="list border d-grid gap-2">
          <Button variant="primary" className="patient-btns">
            Appointment
          </Button>
        </Col>
      </Row>
      {/* </Col> */}
    </Container>
  );
}
