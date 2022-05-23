/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import {
  Container, Col, Row, Card, Button,
} from 'react-bootstrap';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { FaCalendarTimes } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './Dashboard.css';
import PatientForm from '../patient/PatientForm';

function Dashboard() {
  const [PForm, setPForm] = useState(false);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>
        <Col xs={3} className="mt-2">
          <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
            <Card.Body className="card-body">
              <Card.Title><BsPersonBadgeFill size={100} /></Card.Title>
              <Button
                variant="secondary"
                style={{ width: '100%' }}
                onClick={() => { setPForm(true); }}
              >
                Add a patient
              </Button>
            </Card.Body>
            { PForm && <PatientForm postButton={setPForm} /> }
          </Card>
        </Col>
        <Col xs={3} className="mt-2">
          <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
            <Card.Body className="card-body">
              <Card.Title><FaCalendarTimes size={100} /></Card.Title>
              <Button variant="secondary" style={{ width: '100%' }}>Add an appointment</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={3} className="mt-2">
          <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
            <Card.Body className="card-body">
              <Card.Title><MdOutlinePayment size={100} /></Card.Title>
              <Button variant="secondary" style={{ width: '100%' }}>Add a payment</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
