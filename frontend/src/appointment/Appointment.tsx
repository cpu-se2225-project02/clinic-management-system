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
  AllPatientsDocument, AllDocsDocument, GetAllAppointmentsDocument,
  AddAnAppointmentDocument, EdiAnAppointmentDocument, DeleteAnAppointmentDocument,
} from '../queries.generated';
import Footer from '../common/Footer';

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

  const [deletAppointmentResult, deleteAnAppointment] = useMutation(DeleteAnAppointmentDocument);

  const [editAppointmentResult, editAppointment] = useMutation(EdiAnAppointmentDocument);

  const [addAppointmentResult, addAppointment] = useMutation(AddAnAppointmentDocument);

  const { data, error, fetching } = allAppointments;

  if (fetching || addAppointmentResult.fetching || editAppointmentResult.fetching
    || deletAppointmentResult.fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error || addAppointmentResult.error || editAppointmentResult.error
    || deletAppointmentResult.error) {
    console.log(error);
    console.log(addAppointmentResult.error);
    return <div>Something went wrong</div>;
  }

  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    setActive(type);
  };

  const handleDelete = (deletedId: string | number) => {
    deleteAnAppointment({
      appId: deletedId as number,
    });
  };

  const handleConfirm = (event: ProcessedEvent, action: EventActions) => {
    if (action === 'create') {
      addAppointment({
        appointment: {
          doc_id: event.doctor_in_charge,
          patient_id: event.patient_id,
          name: event.title,
          dt_start: new Date(event.start) as any as string,
          dt_end: new Date(event.end) as any as string,
        },
      });
      console.log(event);
    } else if (action === 'edit') {
      editAppointment({
        theAppointment: {
          patient_id: event.patient_id,
          doc_id: event.doctor_in_charge,
          dt_start: new Date(event.start) as any as string,
          dt_end: new Date(event.end) as any as string,
          name: event.title,
        },
        aId: event.event_id as number,
      });
      console.log(event);
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

        <Col xs={10} className="appointment-box p-0 mt-3  mb-5 border border-2 border-dark right-side">
          <Row>
            <Col xs={12}>
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
                  height={500}
                  month={{
                    weekDays: [0, 1, 2, 3, 4, 5, 6],
                    weekStartOn: 0,
                    startHour: 7,
                    endHour: 16,
                  }}
                  week={{
                    weekDays: [0, 1, 2, 3, 4, 5, 6],
                    weekStartOn: 0,
                    startHour: 7,
                    endHour: 16,
                    step: 60,
                  }}
                  view="month"
                  onConfirm={handleConfirm}
                  onDelete={handleDelete}
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
                      name: 'doctor_in_charge',
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
                <Row>
                  {data?.appointments?.map((appointment) => (
                    <div>
                      {appointment?.dt_start}
                      {appointment?.dt_end}
                      {appointment?.patient?.f_name}
                      {appointment?.patient?.l_name}
                    </div>
                  ))}
                </Row>
              )}
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Appointment;
