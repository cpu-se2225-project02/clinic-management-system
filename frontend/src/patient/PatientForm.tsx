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
  const [email, setEmail] = useState('');
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

  const handleSubmitBtn = () => {
    insertingPatient();
    postButton(false);
  };

  return (
    <Modal show={payForm} onHide={() => postButton(false)} className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton><h5>Add a Patient</h5></Modal.Header>
      <Modal.Body>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Last Name</span>
          <input type="text" className="form-control" onChange={(e) => { setLastName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">First Name</span>
          <input type="text" className="form-control" onChange={(e) => { setFirstName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Middle Name</span>
          <input type="text" className="form-control" onChange={(e) => { setMiddleName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Suffix</span>
          <input type="text" className="form-control" onChange={(e) => { setSuffix(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Age</span>
          <input type="number" className="form-control" onChange={(e) => { setAge(parseInt(e.target.value)); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Sex</span>
          <select className="form-control" onChange={(e) => { setSex(e.target.value); }}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Date of Birth</span>
          <input type="date" className="form-control" onChange={(e) => { setDob(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Address</span>
          <input type="text" className="form-control" onChange={(e) => { setAddress(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Email Address</span>
          <input type="text" className="form-control" onChange={(e) => { setEmail(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Phone Number</span>
          <input type="number" className="form-control" onChange={(e) => { setContNo(e.target.value); }} />
        </div>

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={() => { handleSubmitBtn(); postButton(false); }}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>

  );
}
