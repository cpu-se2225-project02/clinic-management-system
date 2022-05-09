/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useQuery } from 'urql';
import { GetPatientDocument } from '../queries.generated';
import './PatientInformation.css';

interface PatientId {
  pId: number | undefined
}

export default function PatientInformation({ pId }: PatientId) {
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: pId as number,
    },
  });

  const { data } = allPatients;

  return (
    <>
      <div className="name">
        {data?.specificPatient?.l_name}
        {' '}
        {data?.specificPatient?.f_name}
        {' '}
        {data?.specificPatient?.m_initial}
      </div>
      <div>
        {data?.specificPatient?.sex}
      </div>
      <div>
        {data?.specificPatient?.age}
      </div>
      <div>
        {data?.specificPatient?.birthdate}
      </div>
      <div>
        {data?.specificPatient?.address}
      </div>

    </>
  );
}
