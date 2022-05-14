/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useQuery, useMutation } from 'urql';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { GetPatientDocument, DeleteAPatientDocument } from '../queries.generated';
import './PatientInformation.css';
import UpdatePatientForm from './UpdatePatientForm';

interface PatientId {
  pId: number | undefined
}

export default function PatientInformation({ pId }: PatientId) {
  const [editBtn, setEditBtn] = useState(false);
  const [deletPatientResult, deletePatient] = useMutation(DeleteAPatientDocument);
  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: pId as number,
    },
  });

  const { error, fetching } = deletPatientResult;
  const { data } = allPatients;

  const patientDeletion = () => {
    deletePatient({
      patientID: pId as number,
    });
  };

  return (
    <>
      <BiEdit size={30} onClick={() => setEditBtn(!editBtn)} />
      <MdDeleteOutline size={30} onClick={patientDeletion} />
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
