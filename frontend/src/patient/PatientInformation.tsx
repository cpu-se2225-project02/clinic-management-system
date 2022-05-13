/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useQuery } from 'urql';
import { BiEdit } from 'react-icons/bi';
import { GetPatientDocument } from '../queries.generated';
import './PatientInformation.css';
import UpdatePatientForm from './UpdatePatientForm';

interface PatientId {
  pId: number | undefined
}

export default function PatientInformation({ pId }: PatientId) {
  const [editBtn, setEditBtn] = useState(false);
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: pId as number,
    },
  });

  const { data } = allPatients;

  return (
    <>
      <BiEdit size={30} onClick={() => setEditBtn(!editBtn)} />
      {editBtn && <UpdatePatientForm postButton={setEditBtn} patientID={pId} />}
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
