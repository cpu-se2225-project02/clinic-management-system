/* eslint-disable prefer-template */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { ReactNode, useState } from 'react';
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

function getCurrentDate() {
  const nowDate = new Date();
  const date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
  return date;
}

export default function Dashboard() {
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

          <Col xs={10} className="dashboardPage" data-testid="hdr-banner">
            <Row className="mt-3 pb-2">
              <Col xs={4}>
                <Card style={{
                  width: '18rem',
                  textAlign: 'center',
                  boxShadow: '0px 0px 6px 5px rgba(209,209,209,1)',
                }}
                >
                  <Card.Header><strong>Today</strong></Card.Header>
                  <Card.Body>{today()}</Card.Body>
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
                  {PForm && <PatientForm payForm={PForm} postButton={setPForm} />}
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
              <Card style={{
                width: '100rem',
                boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                borderRadius: '10px',
              }}
              >
                <Col xs={12} className="dashboardInfo">
                  <Table className="table table-hover">

                    <thead className="tb-head">
                      <th colSpan={5} className="upcomingAppointments">UPCOMING APPOINTMENTS</th>
                      {/* <caption>Upcoming Appointments</caption> */}
                      <tr>
                        <th className="dashTitle" scope="col">APPOINTMENT TITLE</th>
                        <th className="dashTitle" scope="col">PATIENT NAME</th>
                        <th className="dashTitle" scope="col">DOCTOR-IN-CHARGE</th>
                        <th className="dashTitle" scope="col">START</th>
                        <th className="dashTitle" scope="col">END</th>
                      </tr>
                    </thead>
                    {allAppointments.data?.appointments?.map((appointment) => {
                      if (new Date(appointment?.dt_start as string) > new Date(getCurrentDate())) {
                        return (
                          <tbody>
                            <tr>
                              <td className="dashboardList">{appointment?.name}</td>
                              <td className="dashboardList">
                                {appointment?.patient?.f_name}
                                {' '}
                                {appointment?.patient?.l_name}
                              </td>
                              <td className="dashboardList">{appointment?.doctor?.doc_name}</td>
                              <td className="dashboardList">
                                {new Date(appointment?.dt_start as string).toDateString()}
                                {' '}
                                {new Date(appointment?.dt_start as string).toLocaleTimeString()}
                              </td>
                              <td className="dashboardList">
                                {new Date(appointment?.dt_end as string).toDateString()}
                                {' '}
                                {new Date(appointment?.dt_end as string).toLocaleTimeString()}
                              </td>
                            </tr>
                          </tbody>
                        );
                      }
                    }) as any as ReactNode}
                  </Table>
                </Col>
              </Card>
            </Row>
          </Col>
        </Row>
      </Row>
      <Footer />
    </Container>
  );
}

// export default Dashboard;
