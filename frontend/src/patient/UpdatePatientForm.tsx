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

  const handleSubmitBtn = () => {
    updatePatientInfo();
    postButton(false);
  };

  return (
    <Modal show={payForm} onHide={() => postButton(false)} className="mt-5 mb-5" backdrop="static">
      <Modal.Header closeButton><h5>Edit Patient Info</h5></Modal.Header>
      <Modal.Body>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Last Name</span>
          <input type="text" className="form-control" value={lastName} onChange={(e) => { setLastName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">First Name</span>
          <input type="text" className="form-control" value={firstName} onChange={(e) => { setFirstName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Middle Name</span>
          <input type="text" className="form-control" value={middleName} onChange={(e) => { setMiddleName(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Suffix</span>
          <input type="text" className="form-control" value={suffix} onChange={(e) => { setSuffix(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Age</span>
          <input type="number" className="form-control" value={age} onChange={(e) => { setAge(parseInt(e.target.value)); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Sex</span>
          <select className="form-control" value={sex} onChange={(e) => { setSex(e.target.value); }}>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Date of Birth</span>
          <input type="date" className="form-control" value={dob} onChange={(e) => { setDob(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Address</span>
          <input type="text" className="form-control" value={address} onChange={(e) => { setAddress(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Email Address</span>
          <input type="text" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value); }} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text">Phone Number</span>
          <input type="number" className="form-control" value={contNo} onChange={(e) => { setContNo(e.target.value); }} />
        </div>

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={handleSubmitBtn}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>

  );
}
