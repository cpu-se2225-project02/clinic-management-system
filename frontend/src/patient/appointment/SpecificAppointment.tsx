/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import { useQuery } from 'urql';
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
      {data?.specificAppointment?.map((appointment) => (
        <div className="border-bottom">
          <b>{appointment?.name}</b>
          {' '}
          {new Date(appointment?.dt_start as string).toDateString()}
          {' '}
          {new Date(appointment?.dt_start as string).toLocaleTimeString()}
          {' '}
          {' - '}
          {' '}
          {new Date(appointment?.dt_end as string).toLocaleTimeString()}
        </div>
      ))}
    </>
  );
}
