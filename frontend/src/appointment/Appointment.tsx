/* eslint-disable consistent-return */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import './Appointment.css';
import { useQuery, useMutation } from 'urql';
import { FaCalendarAlt } from 'react-icons/fa';
import {
  Container, Col, Row, Spinner,
} from 'react-bootstrap';
import { Scheduler } from '@aldabil/react-scheduler';
import { ProcessedEvent, EventActions } from '@aldabil/react-scheduler/dist/types';
import { SelectOption } from '@aldabil/react-scheduler/dist/components/inputs/SelectInput';
import AppointmentViewButtons from './AppointmentViewButtons';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import {
  AllPatientsDocument, AllDocsDocument, GetAllAppointmentsDocument, AddAnAppointmentDocument,
} from '../queries.generated';

function Appointment() {
  const types = ['calendar', 'list'];
  const [active, setActive] = useState(types[0]);

  const [allPatients] = useQuery({
    query: AllPatientsDocument,
  });

  const [allAppointments] = useQuery({
    query: GetAllAppointmentsDocument,
  });

  const [allDoctors] = useQuery({
    query: AllDocsDocument,
  });

  const [addAppointmentResult, addAppointment] = useMutation(AddAnAppointmentDocument);

  const { data, error, fetching } = allAppointments;

  if (fetching || addAppointmentResult.fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error || addAppointmentResult.error) {
    console.log(error);
    console.log(addAppointmentResult.error);
    return <div>Something went wrong</div>;
  }

  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setActive(type);
  };

  const handleConfirm = (event: ProcessedEvent, action: EventActions) => {
    if (action === 'create') {
      addAppointment({
        appointment: {
          doc_id: 1,
          patient_id: 2,
          name: 'Test',
          dt_start: '2022-05-09 9:00',
          dt_end: '2022-05-09 10:00',
        },
      });
      console.log(event.start);
    }
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
                  onConfirm={handleConfirm}
                  events={
                    allAppointments.data?.appointments?.map((appointment) => ({
                      event_id: appointment?.id,
                      title: appointment?.name,
                      start: new Date(appointment?.dt_start as string),
                      end: new Date(appointment?.dt_end as string),
                    }) as any as ProcessedEvent)
                  }
                  fields={[
                    {
                      name: 'patient_id',
                      type: 'select',
                      options: allPatients.data?.patients?.map((patient) => ({
                        id: patient?.id,
                        text: (patient?.f_name)?.concat(` ${patient.l_name}`),
                        value: patient?.id,
                      }) as SelectOption),
                      config: { label: 'Select Patient', required: true },
                    },
                    {
                      name: 'doctor-in-charge',
                      type: 'select',
                      options: allDoctors.data?.allDoctors?.map((doctor) => ({
                        id: doctor?.id,
                        text: doctor?.doc_name,
                        value: doctor?.id,
                      }) as SelectOption),
                      config: { label: 'Doctor-in-Charge', required: true },
                    },
                  ]}
                />
              ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <>
                  {data?.appointments?.map((appointment) => (
                    <div>
                      {appointment?.dt_end}
                      {appointment?.dt_start}
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
