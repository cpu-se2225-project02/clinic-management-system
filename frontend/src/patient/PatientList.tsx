/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import {
  Col, Row, Container, Form, Dropdown, Button, ListGroup, Spinner,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { useQuery } from 'urql';
import { List } from '@mui/material';
import { MdAccountBox } from 'react-icons/md';
import {
  Router, Routes, Route, Link, useNavigate,
} from 'react-router-dom';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { AllPatientsDocument } from '../queries.generated';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './PatientList.css';
import PatientForm from './PatientForm';
import PatientRecord from './PatientRecord';
import PatientInformation from './PatientInformation';
import Footer from '../common/Footer';

export default function PatientList() {
  const [PostButton, setPostButton] = useState(false);
  const navigate = useNavigate();
  const [condition, setCondition] = useState('a-z');

  const [allPatients] = useQuery({
    query: AllPatientsDocument,
    variables: {
      con: condition,
    },
  });

  const { data, error, fetching } = allPatients;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="patient-box">
          <Row>
            <Col xs={12}>
              <h5 className="PatientListBar">
                <MdAccountBox className="patient-icon" />
                Patient List
              </h5>
            </Col>
          </Row>

          <Row>
            <Col xs={5} className="patient-total-label">
              Total of
              {' '}
              {data?.patients?.length}
              {' '}
              patient(s)
            </Col>
            <Col xs={3}>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm={2}>
                    <BiSearchAlt2 size={30} />
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="search"
                    />
                  </Col>
                </Form.Group>
              </Form>
            </Col>
            <Col xs={2}>
              <Dropdown>
                <Dropdown.Toggle variant="">Sort Patients</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => { setCondition('a-z'); }}>A-Z</Dropdown.Item>
                  <Dropdown.Item onClick={() => { setCondition('z-a'); }}>Z-A</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={2}>
              <Button
                className="add-patient-btn btn-sm float-start"
                onClick={() => setPostButton(true)}
              >
                <BsPersonBadgeFill size={20} />
                {' '}
                Add Patient
              </Button>
              {PostButton && <PatientForm payForm={PostButton} postButton={setPostButton} />}
            </Col>
          </Row>
          <Row className="list-row">
            <Col className="list">
              {data?.patients?.map((patient) => (
                <div className="patientInfo d-grid gap-2">
                  <button type="button" className="patientInfo" onClick={() => navigate(`/patient_record/${patient?.id}`)}>
                    <div className="patientInfo">
                      <div className="patientName fw-bold">
                        {patient?.l_name}
                        {', '}
                        {patient?.f_name}
                        {' '}
                        {patient?.m_name}
                        {' '}
                      </div>
                      {patient?.constactNo}

                      <br />
                      {patient?.sex}
                      <br />
                    </div>
                  </button>
                </div>
              ))}
            </Col>
          </Row>
          <Row className="res-row" />
        </Col>
        <Row className="patient-rec-box">
          <Routes>
            <Route path=":id/" element={<PatientRecord />} />
          </Routes>
        </Row>
      </Row>
      <Footer />
    </Container>
  );
}
