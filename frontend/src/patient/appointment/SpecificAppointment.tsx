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
        <div>
          {appointment?.name}
          {' '}
          {appointment?.dt_start}
          {' '}
          {appointment?.dt_end}
        </div>
      ))}
    </>
  );
}
