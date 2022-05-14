/* eslint-disable radix */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './UpdatePatientForm.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { Spinner } from 'react-bootstrap';
import { useMutation, useQuery } from 'urql';
import { EditAPatientDocument, GetPatientDocument } from '../queries.generated';

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
  patientID: number | undefined;
}

export default function UpdatePatientForm({ postButton, patientID }: Popup) {
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
  const [middleInitial, setMiddileInitial] = useState(data?.specificPatient?.m_initial as string);
  const [sex, setSex] = useState(data?.specificPatient?.sex as string);
  const [suffix, setSuffix] = useState(data?.specificPatient?.suffix as string);
  const [age, setAge] = useState(data?.specificPatient?.age as number);
  const [dob, setDob] = useState(data?.specificPatient?.birthdate as string);
  const [address, setAddress] = useState(data?.specificPatient?.address as string);

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
        m_initial: middleInitial,
        sex,
        suffix,
        age,
        birthdate: dob,
        address,
      },
      pid: patientID as number,
    });
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <button
          onClick={() => postButton(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>

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

        <label>Middle Initial:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Middle Initial"
          onChange={(e) => { setMiddileInitial(e.target.value); }}
          value={middleInitial}

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

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={updatePatientInfo}
          type="submit"
        >
          Update
        </button>

      </div>
    </div>
  );
}
