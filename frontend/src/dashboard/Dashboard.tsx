/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import {
  Container, Col, Row, Card, Button, Table,
} from 'react-bootstrap';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { FaCalendarTimes } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'urql';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './Dashboard.css';
import PatientForm from '../patient/PatientForm';
import AddPaymentForm from '../patient/account/AddPaymentForm';
import { GetAllAppointmentsDocument } from '../queries.generated';

function Dashboard() {
  const navigate = useNavigate();
  const [PForm, setPForm] = useState(false);
  const [PayForm, setPayForm] = useState(false);

  const [allAppointments] = useQuery({
    query: GetAllAppointmentsDocument,
  });

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Row>
          <Col xs={2} className="sidebar-box p-0">
            <Sidebars />
          </Col>
          <Col xs={10}>
            <Row>
              <Col xs={4} className="mt-2">
                <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
                  <Card.Body className="c-body">
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
              <Col xs={4} className="mt-2">
                <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
                  <Card.Body className="c-body">
                    <Card.Title><FaCalendarTimes size={100} /></Card.Title>
                    <Button
                      variant="secondary"
                      style={{ width: '100%' }}
                      onClick={() => navigate('/appointments')}
                    >
                      Add an appointment
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4} className="mt-2">
                <Card style={{ width: '18rem', boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)' }}>
                  <Card.Body className="c-body">
                    <Card.Title><MdOutlinePayment size={100} /></Card.Title>
                    <Button
                      variant="secondary"
                      style={{ width: '100%' }}
                      onClick={() => { setPayForm(true); }}
                    >
                      Add a payment
                    </Button>
                  </Card.Body>
                  {PayForm && <AddPaymentForm addPaymentBtn={setPayForm} />}
                </Card>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col xs={12}>
                <Table striped bordered hover size="sm" className="tb">
                  <thead className="tb-head">
                    <tr>
                      <th>Appointment Title</th>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  {allAppointments.data?.appointments?.map((appointment) => (
                    <tbody>
                      <td>{appointment?.name}</td>
                      <td>{appointment?.dt_start}</td>
                      <td>{ appointment?.dt_end }</td>
                    </tbody>
                  ))}
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}

export default Dashboard;
