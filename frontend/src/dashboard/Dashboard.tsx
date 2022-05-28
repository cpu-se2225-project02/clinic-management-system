/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { useState } from 'react';
import {
  Container, Col, Row, Card, Button, Table,
  Spinner, Modal,
} from 'react-bootstrap';
import { BsPersonBadgeFill } from 'react-icons/bs';
import { FaCalendarTimes, FaStethoscope } from 'react-icons/fa';
import { MdOutlinePayment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { IoIosPeople } from 'react-icons/io';
import { useQuery } from 'urql';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './Dashboard.css';
import PatientForm from '../patient/PatientForm';
import AddPaymentForm from '../patient/account/AddPaymentForm';
import { AllDoctorsDocument, AllPatientsDocument, GetAllAppointmentsDocument } from '../queries.generated';
import Footer from '../common/Footer';

const today = () => {
  const date = new Date();
  return (
    <div>
      {date.toDateString()}
    </div>
  );
};

function Dashboard() {
  const navigate = useNavigate();
  const [PForm, setPForm] = useState(false);
  const [PayForm, setPayForm] = useState(false);
  const handleShowPayForm = () => setPayForm(true);
  const handleShowPForm = () => setPForm(true);
  const handleClose = () => setPayForm(false);
  const [allPatients] = useQuery({
    query: AllPatientsDocument,
  });
  const [allDocs] = useQuery({
    query: AllDoctorsDocument,
  });

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
            <Row className="mt-3 pb-2">
              <Col xs={4}>
                <Card style={{
                  width: '18rem',
                  textAlign: 'center',
                  boxShadow: '0px 0px 6px 5px rgba(209,209,209,1)',
                }}
                >
                  <Card.Header><strong>Today</strong></Card.Header>
                  <Card.Body>{ today() }</Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card style={{
                  width: '18rem',
                  textAlign: 'center',
                  boxShadow: '0px 0px 6px 5px rgba(209,209,209,1)',
                }}
                >
                  <Card.Body>
                    <IoIosPeople size={64} />
                    {' '}
                    Total of
                    {' '}
                    <strong>{allPatients.data?.patients?.length}</strong>
                    {' '}
                    patients
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={4}>
                <Card style={{
                  width: '18rem',
                  textAlign: 'center',
                  boxShadow: '0px 0px 6px 5px rgba(209,209,209,1)',
                }}
                >
                  <Card.Body>
                    <FaStethoscope size={64} />
                    {' '}
                    Total of
                    {' '}
                    <strong>{allDocs.data?.allDoctors?.length}</strong>
                    {' '}
                    Doctors
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col xs={4} className="mt-2">
                <Card style={{
                  width: '18rem',
                  boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                  borderRadius: '20px',
                }}
                >
                  <Card.Body className="c-body">
                    <Card.Title><BsPersonBadgeFill size={80} /></Card.Title>
                    <Button
                      variant="secondary"
                      style={{ width: '100%' }}
                      onClick={() => { setPForm(true); }}
                    >
                      Add a patient
                    </Button>
                  </Card.Body>
                  { PForm && <PatientForm payForm={PForm} postButton={setPForm} /> }
                </Card>
              </Col>
              <Col xs={4} className="mt-2">
                <Card style={{
                  width: '18rem',
                  boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                  borderRadius: '20px',
                }}
                >
                  <Card.Body className="c-body">
                    <Card.Title><FaCalendarTimes size={80} /></Card.Title>
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
                <Card style={{
                  width: '18rem',
                  boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                  borderRadius: '20px',
                }}
                >
                  <Card.Body className="c-body">
                    <Card.Title><MdOutlinePayment size={80} /></Card.Title>
                    <Button
                      variant="secondary"
                      style={{ width: '100%' }}
                      onClick={handleShowPayForm}
                    >
                      Add a payment
                    </Button>
                  </Card.Body>
                  {PayForm && <AddPaymentForm payForm={PayForm} addPaymentBtn={setPayForm} />}
                </Card>
              </Col>
            </Row>
            <Row className="mt-5 mb-5">
              <Col xs={12}>
                <Table striped bordered hover size="sm" className="tb">
                  <thead className="tb-head">
                    <tr>
                      <th>Appointment Title</th>
                      <th>Patient Name</th>
                      <th>Doctor-in-Charge</th>
                      <th>Start</th>
                      <th>End</th>
                    </tr>
                  </thead>
                  {allAppointments.data?.appointments?.map((appointment) => (
                    <tbody>
                      <td>{appointment?.name}</td>
                      <td>
                        {appointment?.patient?.f_name}
                        {' '}
                        {appointment?.patient?.l_name }
                      </td>
                      <td>{ appointment?.doctor?.doc_name }</td>
                      <td>
                        {new Date(appointment?.dt_start as string).toDateString()}
                        {' '}
                        { new Date(appointment?.dt_start as string).toLocaleTimeString() }
                      </td>
                      <td>
                        {new Date(appointment?.dt_end as string).toDateString()}
                        {' '}
                        { new Date(appointment?.dt_end as string).toLocaleTimeString() }
                      </td>
                    </tbody>
                  ))}
                </Table>
              </Col>
            </Row>
          </Col>
        </Row>
      </Row>
      <Footer />
    </Container>
  );
}

export default Dashboard;
