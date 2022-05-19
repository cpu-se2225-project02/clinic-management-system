/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
// import { EditAPrescriptionDocument, GetPrescriptionDocument } from '../../queries.generated';

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
  patientID: number | undefined;
}

export default function UpdatePrescriptionForm({ postButton, patientID }: Popup) {
  // const [editPrescriptionResult, editPrescription] = useMutation(EditAPrescriptionDocument);

  // const [allPrescriptions] = useQuery({
  //   query: GetPrescriptionDocument,
  //   variables: {
  //     id:
  //   },
  // });

  // const { data } = allPrescriptions;
  // const [presName, setPresName] = useState(data?.patientPrescriptions.);

  // const { error, fetching } = editPrescriptionResult;

  return (
    <div className="popup">
      <div className="popup-inner">
        <button
          // onClick={() => editButton(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>

        <label>Prescription name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Prescription name"
        />

        <label>Prescription dosage:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Prescription dosage"
        />
        <button
          className="btn btn-primary mt-2 float-end"
          type="submit"
        >
          Submit
        </button>

      </div>
    </div>
  );
}
