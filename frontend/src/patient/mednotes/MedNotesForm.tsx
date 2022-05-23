/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation } from 'urql';
import { Spinner, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { AddAMedNoteDocument } from '../../queries.generated';
import './MedNotesForm.css';

interface PatientID {
  pId: number | undefined
  postButton: React.Dispatch<React.SetStateAction<boolean>>
  payForm: boolean
}

export default function MedNotesForm({ pId, postButton, payForm }: PatientID) {
  const [mnTitle, setMnTitle] = useState('');
  const [mnDate, setMnDate] = useState('');
  const [mnNotes, setMnNotes] = useState('');

  const [AddMedoNoteResult, AddMedNote] = useMutation(AddAMedNoteDocument);
  if (AddMedoNoteResult.fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (AddMedoNoteResult.error) {
    console.log(AddMedoNoteResult.error);
    return <div>Insertion unsuccessful</div>;
  }

  const addingMedNote = () => {
    AddMedNote({
      newMedNote: {
        title: mnTitle,
        med_notes: mnNotes,
        date_noted: mnDate,
        patient_id: pId as number,
      },
    });
  };
  return (
    <Modal show={payForm} onHide={() => postButton(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>Add a Doctor</h5></Modal.Header>
      <Modal.Body>

        <button
          onClick={() => postButton(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>

        <label>Title:</label>
        <input
          className="form-control"
          type="text"
          placeholder="Enter title"
          onChange={(e) => { setMnTitle(e.target.value); }}
        />

        <label>Date:</label>
        <input
          className="form-control"
          type="date"
          placeholder="Enter date"
          onChange={(e) => { setMnDate(e.target.value); }}
        />

        <label>Notes</label>
        <textarea
          className="form-control"
          placeholder="Enter notes"
          onChange={(e) => { setMnNotes(e.target.value); }}
        />

        <button
          className="btn btn-primary mt-2 float-end"
          onClick={addingMedNote}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>
  );
}
