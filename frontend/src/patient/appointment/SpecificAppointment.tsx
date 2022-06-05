/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useQuery } from 'urql';
import { Table } from 'react-bootstrap';
import { PatientAppointmentsDocument } from '../../queries.generated';

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
      <Table className="table">
        <tbody>
          {data?.specificAppointment?.map((appointment) => (
            <tr>
              <th scope="row">{appointment?.name}</th>
              <td>{new Date(appointment?.dt_start as string).toDateString()}</td>
              <td>
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
