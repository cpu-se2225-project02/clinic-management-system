/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React from 'react';
import './PatientForm.css';
import { AiOutlineCloseSquare } from 'react-icons/ai';

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function PatientForm({ postButton }: Popup) {
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
        <input className="form-control" type="text" placeholder="Last name" />

        <label>First name:</label>
        <input
          className="form-control"
          type="text"
          placeholder="First name"
        />

        <label>Middle Initial:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Middle Initial"
        />

        <label>Suffix:</label>
        <input className="form-control" type="text" placeholder="Suffix" />

        <label>Sex:</label>
        <select className="form-control">
          <option>Female</option>
          <option>Male</option>
        </select>

        <label>Date of Birth:</label>
        <input
          className="form-control"
          type="date"
          placeholder="Date of Birth"
        />

        <label>Address:</label>
        <input className="form-control" type="text" placeholder="Address" />

      </div>
    </div>
  );
}
