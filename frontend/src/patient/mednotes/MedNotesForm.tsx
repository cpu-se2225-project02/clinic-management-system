/* eslint-disable radix */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useMutation, useQuery } from 'urql';
import { Spinner, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { AddAMedNoteDocument, AllDocsDocument } from '../../queries.generated';
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
  const [mnDoc, setMnDoc] = useState(0);
  const [allDocs] = useQuery({
    query: AllDocsDocument,
  });

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
        doc_id: mnDoc,
      },
    });
  };
  return (
    <Modal show={payForm} onHide={() => postButton(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>Add Medical Note</h5></Modal.Header>
      <Modal.Body>

        <label>Select Doctor:</label>
        <select className="form-control" onChange={(e) => { setMnDoc(parseInt(e.target.value)); }}>
          <option>Select Doctor</option>
          {allDocs.data?.allDoctors?.map((doc) => (
            <option value={doc?.id}>{ doc?.doc_name }</option>
          ))}
        </select>

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
          onClick={() => { addingMedNote(); postButton(false); }}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>
  );
}
