/* eslint-disable radix */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './UpdatePatientForm.css';
import { Spinner, Modal } from 'react-bootstrap';
import { useMutation, useQuery } from 'urql';
import { EditAPatientDocument, GetPatientDocument } from '../queries.generated';

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>
  patientID: number | undefined
  payForm: boolean
}

export default function UpdatePatientForm({ postButton, patientID, payForm }: Popup) {
  const [editPatientResult, editPatient] = useMutation(EditAPatientDocument);

  const [allPatients] = useQuery({
    query: GetPatientDocument,
    variables: {
      id: patientID as number,
    },
  });

  const { data } = allPatients;
  const [lastName, setLastName] = useState(data?.specificPatient?.l_name as string);
  const [firstName, setFirstName] = useState(data?.specificPatient?.f_name as string);
  const [middleName, setMiddleName] = useState(data?.specificPatient?.m_name as string);
  const [sex, setSex] = useState(data?.specificPatient?.sex as string);
  const [suffix, setSuffix] = useState(data?.specificPatient?.suffix as string);
  const [age, setAge] = useState(data?.specificPatient?.age as number);
  const [dob, setDob] = useState(data?.specificPatient?.birthdate as string);
  const [address, setAddress] = useState(data?.specificPatient?.address as string);
  const [contNo, setContNo] = useState(data?.specificPatient?.constactNo as string);
  const [email, setEmail] = useState(data?.specificPatient?.email as string);

  const { error, fetching } = editPatientResult;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  const updatePatientInfo = () => {
    editPatient({
      thePatient: {
        l_name: lastName,
        f_name: firstName,
        m_name: middleName,
        sex,
        suffix,
        age,
        birthdate: dob,
        address,
        constactNo: contNo,
        email,
      },
      pid: patientID as number,
    });
  };

  return (
    <Modal show={payForm} onHide={() => postButton(false)} className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton><h5>Add a Patient</h5></Modal.Header>
      <Modal.Body>

        <label>Last name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          onChange={(e) => { setLastName(e.target.value); }}
          value={lastName}
        />

        <label>First name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          onChange={(e) => { setFirstName(e.target.value); }}
          value={firstName}
        />

        <label>Middle Name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Middle Initial"
          onChange={(e) => { setMiddleName(e.target.value); }}
          value={middleName}
        />

        <label>Suffix:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Suffix"
          onChange={(e) => { setSuffix(e.target.value); }}
          value={suffix !== 'null' ? suffix : ''}
        />

        <label>Age:</label>
        <input
          className="form-control"
          type="number"
          placeholder="Age"
          onChange={(e) => { setAge(parseInt(e.target.value)); }}
          value={age}
        />

        <label>Sex:</label>
        <select className="form-control" onChange={(e) => { setSex(e.target.value); }} value={sex}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <label>Date of Birth:</label>
        <input
          className="form-control"
          type="date"
          placeholder="Date of Birth"
          onChange={(e) => { setDob(e.target.value); }}
          value={dob}
        />

        <label>Address:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Address"
          onChange={(e) => { setAddress(e.target.value); }}
          value={address}
        />

        <label>Contact Number:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Contact number"
          onChange={(e) => { setContNo(e.target.value); }}
          value={contNo}
        />

        <label>Email address:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Email address"
          onChange={(e) => { setEmail(e.target.value); }}
          value={email}
        />

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={updatePatientInfo}
          type="submit"
        >
          Update
        </button>

      </Modal.Body>
    </Modal>

  );
}
