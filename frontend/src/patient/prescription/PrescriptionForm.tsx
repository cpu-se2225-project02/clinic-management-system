/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { AddPrescriptionDocument } from '../../queries.generated';

interface PatientID {
  pID: number | undefined
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PrescriptionForm({ pID, postButton }: PatientID) {
  const [prescName, setPrescName] = useState('');
  const [dosage, setDosage] = useState(0);
  const [editBtn, setEditBtn] = useState(false);

  const [AddPrescriptionresult, addPrescription] = useMutation(AddPrescriptionDocument);
  if (AddPrescriptionresult.fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (AddPrescriptionresult.error) {
    console.log(AddPrescriptionresult.error);
    return <div>Insertion unsuccessful</div>;
  }

  const addingPrescription = () => {
    addPrescription({
      newPresc: {
        pres_name: prescName,
        pres_dos: dosage,
        patient_id: pID as number,
      },
    });
  };

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
          className="form-control"
          type="number"
          placeholder="Dosage Amount"
          onChange={(e) => { setDosage(parseInt(e.target.value)); }}

        />

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={addingPrescription}
          type="submit"
        >
          Submit
        </button>

        </div>
      </div>
    </div>
  );
}
