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
import {
  Router, Routes, Route, Link, useNavigate,

} from 'react-router-dom';
import { AllPatientsDocument } from '../queries.generated';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './PatientList.css';
import PatientForm from './PatientForm';
import PatientRecord from './PatientRecord';
import PatientInformation from './PatientInformation';

export default function PatientList() {
  const [PostButton, setPostButton] = useState(false);
  const navigate = useNavigate();

  const [allPatients] = useQuery({
    query: AllPatientsDocument,
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

        <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark">
          <Row>
            <Col xs={12}>
              <h5 className="h5">Patient List</h5>
            </Col>
          </Row>
          <Row className="border-bottom">
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
                <Dropdown.Toggle variant="">Filter Patient</Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>A-Z</Dropdown.Item>
                  <Dropdown.Item>Z-A</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col xs={2}>
              <Button
                className="add-patient-btn btn-sm float-start"
                onClick={() => setPostButton(true)}
              >
                Add Patient
              </Button>
              {PostButton && <PatientForm postButton={setPostButton} />}
            </Col>
          </Row>
          <Row className="list-row">
            <Col className="list">
              {/* <div> */}
              {data?.patients?.map((patient) => (
                <div className="patientOuterInfo">
                  <Button className="btn btn-light" onClick={() => navigate(`/patient_record/${patient?.id}`)}>
                    <div className="row g-0">
                      <Button className="btn btn-outline-dark" onClick={() => navigate(`/patient_record/${patient?.id}`)}>
                      {patient?.l_name}
                      {', '}
                      {patient?.f_name}
                      {' '}
                      {patient?.m_name}
                      {' '}
                      <br />
                      {/* Please add phone number */}
                      {patient?.sex}
                      <br />
                    </div>
                  </Button>
                </div>
              ))}
              {/* </div> */}
            </Col>
          </Row>
        </Col>
        <Row className="patient-rec-box">
          <Routes>
            <Route path=":id/" element={<PatientRecord />} />
          </Routes>
        </Row>
      </Row>
    </Container>
  );
}
