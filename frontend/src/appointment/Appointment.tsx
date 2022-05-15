/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import './Appointment.css';
import { useQuery } from 'urql';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  Container, Col, Row, Spinner,
} from 'react-bootstrap';
import { Scheduler } from '@aldabil/react-scheduler';
import AppointmentViewButtons from './AppointmentViewButtons';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import { AllAppointmentsDocument } from '../queries.generated';

function Appointment() {
  const types = ['calendar', 'list'];
  const [active, setActive] = useState(types[0]);

  const [allAppointments] = useQuery({
    query: AllAppointmentsDocument,
  });

  const { data, error, fetching } = allAppointments;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error.cause);
    return <div>Something went wrong</div>;
  }

  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setActive(type);
  };

  return (
    <Container fluid>

      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="appointment-box p-0 mt-2 border border-dark">
          <Row>
            <Col>
              <h5 className="h5">
                <FaCalendarAlt className="appointment-icon" />
                Appointments
              </h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <AppointmentViewButtons className="appointment-toggle-btn" type={active} onClick={handleChange} />
            </Col>
          </Row>

          <hr className="mt-2" />

          <Row className="mt-4">
            <Col>
              {active === 'calendar' ? (
                <Scheduler
                  view="month"
                  fields={[
                    {
                      name: 'patient_id',
                      type: 'select',
                      options: [
                        { id: 1, text: 'Jenny', value: 1 },
                      ],
                      config: { label: 'Select Patient', required: true },
                    },
                    {
                      name: 'doctor-in-charge',
                      type: 'select',
                      options: [
                        { id: 1, text: 'Sue', value: 1 },
                      ],
                      config: { label: 'Doctor-in-Charge', required: true },
                    },
                  ]}
                />
              ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {data?.appointments?.map((appointment) => (
                    <div>
                      {appointment?.date_time}
                      {appointment?.patient?.f_name}
                      {appointment?.patient?.l_name}
                    </div>
                  ))}
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Appointment;
