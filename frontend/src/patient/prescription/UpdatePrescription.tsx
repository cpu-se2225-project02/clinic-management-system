/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import { editPrescriptionDocument, getPrescriptionDocument } from '../queries.generated';

interface Popup {
  editButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function UpdatePrescription({ editButton }: Popup) {
  return (
    <div className="popup">
      <div className="popup-inner">
        <button
          onClick={() => editButton(false)}
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
