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

export default function PatientRecord() {
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [PatientInfoBtn, setPatientInfoBtn] = useState(false);

  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patiendID,
    },
  });

  const { data } = allPatients;

  return (
    <Container fluid>
      <Row />
      <Row>
        <Col xs={2} className="sidebar-box p-0" />

        <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark">
          <Row>
            <Col xs={12}>
              <h5 className="h5">
                {params.id}
                .
                {' '}
                {data?.specificPatient?.f_name}
                {' '}
                {data?.specificPatient?.l_name}
              </h5>
            </Col>
          </Row>

          <Row>
            <Col className="list border d-grid gap-2">
              <Button
                variant="primary"
                className="patient-btns"
                onClick={() => setPatientInfoBtn(!PatientInfoBtn)}
              >
                Patient Information
              </Button>

            </Col>
          </Row>
          <Row>
            {PatientInfoBtn && <PatientInformation pId={data?.specificPatient?.id} />}
          </Row>
          <Row>
            <Col className="list border d-grid gap-2">
              <Button variant="primary" className="patient-btns">
                Prescriptions
              </Button>
            </Col>
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
              <Button variant="primary" className="patient-btns">
                Medical Notes
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="list border d-grid gap-2">
              <Button variant="primary" className="patient-btns">
                Appointment
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
