/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Form, FormControl, Button, Table,
} from 'react-bootstrap';
import { useQuery, useMutation } from 'urql';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline, MdPhone } from 'react-icons/md';
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
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={PatientIcon} className="PatientIcon" alt="..." />
          </div>
          <div className="col-7">
            <div className="patientFullName fw-bold">
              <br />
              <br />
              {data?.specificPatient?.f_name}
              {' '}
              {data?.specificPatient?.m_name}
              {' '}
              {data?.specificPatient?.l_name}
              <br />
            </div>
            <MdPhone size={20} />
            {' : '}
            +63
            {data?.specificPatient?.constactNo}
          </div>
          <div className="col">
            <div className="btn-group editAndDltBtn" role="group">
              <button type="button" className="editAndDltBtn" onClick={() => setEditBtn(!editBtn)}>
                <BiEdit size={30} />
                {/* Edit */}
              </button>
              <button type="button" className="editAndDltBtn" onClick={patientDeletion}>
                <MdDeleteOutline size={30} />
                {/* Delete */}
              </button>
              {editBtn && <UpdatePatientForm payForm={editBtn} postButton={setEditBtn} patientID={pId} />}
            </div>
          </div>
        </div>
        <div className="patientInformationtTable">
          <Table className="table table-sm">
            <tbody>
              <tr>
                <td>
                  <b>Email :</b>
                  {' '}
                  {data?.specificPatient?.email}
                </td>
                <td>
                  <b>Gender : </b>
                  {' '}
                  {data?.specificPatient?.sex}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Address : </b>
                  {' '}
                  {data?.specificPatient?.address}
                </td>
                <td>
                  <b>Birthdate : </b>
                  {' '}
                  {data?.specificPatient?.birthdate}
                </td>
                <td>
                  <b>Age : </b>
                  {' '}
                  {data?.specificPatient?.age}
                </td>
              </tr>
              <td>
                <b>Blood Type : </b>
                {' '}
              </td>
            </tbody>
          </Table>

        </div>
      </div>
    </>
  );
}
