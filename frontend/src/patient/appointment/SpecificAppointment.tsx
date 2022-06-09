/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useQuery } from 'urql';
import { Table } from 'react-bootstrap';
import { MdBookmark, MdCalendarToday } from 'react-icons/md';
import { PatientAppointmentsDocument } from '../../queries.generated';
import './SpecificAppointment.css';

interface Popup {
  pId: number | undefined
}

export default function SpecificAppointment({ pId }: Popup) {
  const [patientAppointment] = useQuery({
    query: PatientAppointmentsDocument,
    variables: {
      pID: pId as number,
    },
  });
  const { data } = patientAppointment;
  return (
    <>
      <Table className="table table-striped specificAppointment">
        <thead>
          <th scope="col">
            <MdBookmark size={35} />
          </th>
          <th scope="col">Appointments</th>
          <th scope="col">Date</th>
        </thead>
        <tbody>
          {data?.specificAppointment?.map((appointment) => (
            <tr>
              <th scope="row">
                <MdCalendarToday size={20} />
              </th>
              <td>{appointment?.name}</td>
              <td>
                {new Date(appointment?.dt_start as string).toDateString()}
                {' '}
                {' '}
                {new Date(appointment?.dt_start as string).toLocaleTimeString()}
                {' '}
                {' - '}
                {' '}
                {new Date(appointment?.dt_end as string).toLocaleTimeString()}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
