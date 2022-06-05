/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { MdNoteAdd } from 'react-icons/md';
import { useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { DisplayMedNotesDocument } from '../../queries.generated';
import MedNotesForm from './MedNotesForm';
import './MedicalNotes.css';

interface PatientID {
  pId: number | undefined
}

export default function MedicalNotes({ pId }: PatientID) {
  const [PostButton, setPostButton] = useState(false);

  const [allMedNotes] = useQuery({
    query: DisplayMedNotesDocument,
    variables: {
      pID: pId as number,
    },
  });

  const { data, error, fetching } = allMedNotes;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  return (
    <>
      <div>
        <button type="button" onClick={() => { setPostButton(!PostButton); }} className="btn btn-outline-secondary">
          <MdNoteAdd size={25} />
          {' '}
          Add Note
        </button>
        {PostButton && <MedNotesForm payForm={PostButton} pId={pId} postButton={setPostButton} />}
      </div>
      <table className="table">
        <tbody>
          {data?.patientMedNotes?.map((note) => (
            // <>
            <tr>
              <th scope="row">{note?.title}</th>
              <td>{note?.date_noted}</td>
              <td>{note?.med_notes}</td>
              <td>
                Dr.
                {'  '}
                {note?.doctor?.doc_name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
