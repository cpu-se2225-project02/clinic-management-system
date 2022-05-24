/* eslint-disable radix */
/* eslint-disable consistent-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import './PatientForm.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation } from 'urql';
import { Modal, Spinner } from 'react-bootstrap';
import { AddPatientDocument, AddPatientMutationVariables } from '../queries.generated';

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>
  payForm: boolean
}

export default function PatientForm({ postButton, payForm }: Popup) {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [sex, setSex] = useState('Female');
  const [suffix, setSuffix] = useState('');
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [contNo, setContNo] = useState('');
  const [email, setEmal] = useState('');
  const [addPatientResult, addPatient] = useMutation(AddPatientDocument);

  const { data, error, fetching } = addPatientResult;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  const insertingPatient = () => {
    addPatient({
      newPatient: {
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
    }).then((res) => console.log(res));
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
        />

        <label>First name:</label>
        <input
          required
          className="form-control"
          type="text"
          placeholder="First name"
          onChange={(e) => { setFirstName(e.target.value); }}
        />

        <label>Middle Initial:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Middle Initial"
          onChange={(e) => { setMiddleName(e.target.value); }}
        />

        <label>Suffix:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Suffix"
          onChange={(e) => { setSuffix(e.target.value); }}
        />

        <label>Age:</label>
        <input
          className="form-control"
          type="number"
          placeholder="Age"
          onChange={(e) => { setAge(parseInt(e.target.value)); }}
        />

        <label>Sex:</label>
        <select className="form-control" onChange={(e) => { setSex(e.target.value); }}>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
        </select>

        <label>Date of Birth:</label>
        <input
          className="form-control"
          type="date"
          placeholder="Date of Birth"
          onChange={(e) => { setDob(e.target.value); }}
        />

        <label>Address:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Address"
          onChange={(e) => { setAddress(e.target.value); }}
        />

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={insertingPatient}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>

  );
}
