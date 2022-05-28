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
import PatientIcon from './assets/images.png';

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
      <div className="col" style={{ textAlign: 'right' }}>
        <BiEdit size={30} onClick={() => setEditBtn(!editBtn)} />
        <MdDeleteOutline size={30} onClick={patientDeletion} />
        {editBtn && <UpdatePatientForm payForm={editBtn} postButton={setEditBtn} patientID={pId} />}
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="container">
        <div className="row">
          <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
          <div className="col">
            <img src={PatientIcon} className="PatientIcon" alt="..." />
          </div>
          <div className="col-6">
            <div className="patientFullName fw-bold">
              <br />
              {data?.specificPatient?.f_name}
              {' '}
              {data?.specificPatient?.m_name}
              {' '}
              {data?.specificPatient?.l_name}
              <br />
            </div>
            Sex:
            {' '}
            {data?.specificPatient?.sex}
            <br />
            Age:
            {' '}
            {data?.specificPatient?.age}
            <br />
            Birthdate:
            {' '}
            {data?.specificPatient?.birthdate}
            <br />
            Address:
            {' '}
            {data?.specificPatient?.address}
          </div>
          <div className="col">
            <div className="editAndDelete">
              <div className="col" style={{ textAlign: 'right' }}>
                <BiEdit size={30} onClick={() => setEditBtn(!editBtn)} />
                <MdDeleteOutline size={30} onClick={patientDeletion} />
                {editBtn && <UpdatePatientForm postButton={setEditBtn} patientID={pId} payForm={false} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
