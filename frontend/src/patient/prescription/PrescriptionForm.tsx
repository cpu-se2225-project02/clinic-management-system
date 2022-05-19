/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Spinner } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { AddPrescriptionDocument } from '../../queries.generated';
import UpdatePrescription from './UpdatePrescription';

interface PatientID {
  pID: number | undefined
}

// eslint-disable-next-line no-unused-vars
export default function PrescriptionForm({ pID }: PatientID) {
  // const [prescName, setPrescName] = useState('');
  // const [dosage, setDosage] = useState(0);
  const [editBtn, setEditBtn] = useState(false);
  const [addPrescriptionResult] = useMutation(AddPrescriptionDocument);

  const { error, fetching } = addPrescriptionResult;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  // const addingPrescription = () => {
  //   addPrescription({
  //     newPresc: {
  //       pres_name: prescName,
  //       pres_dos: dosage,
  //     },
  //   });
  // };

  return (
    <div className="card border-dark mb-3">
      <div className="h5">
        <div className="col">Prescription</div>
      </div>

      <div className="col" style={{ textAlign: 'right' }}>
        <div>{pID}</div>
        <BiEdit size={30} onClick={() => setEditBtn(!editBtn)} />
        {editBtn && <UpdatePrescription editButton={setEditBtn} />}
      </div>
      <div className="col">
        <label>Prescriptions:</label>
        <p>
          PrescriptionName - Dosage
        </p>
        {/* <input
          type="text"
          placeholder="Prescription"
          onChange={(e) => setPrescName(e.target.value)}
        /> */}
        {/* <label>Dosage</label>
        <input
          type="number"
          placeholder="Dosage"
          onChange={(e) => setDosage(parseInt(e.target.value))}
        /> */}

      </div>
    </div>
  );
}
