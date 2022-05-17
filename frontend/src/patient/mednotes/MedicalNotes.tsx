/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { GoDiffAdded } from 'react-icons/go';
import { useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { DisplayMedNotesDocument } from '../../queries.generated';
import MedNotesForm from './MedNotesForm';

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
      <GoDiffAdded size={30} onClick={() => { setPostButton(!PostButton); }} />
      { PostButton && <MedNotesForm pId={pId} postButton={setPostButton} /> }
      <div>
        {data?.patientMedNotes?.map((note) => (
          <>
            <div>{note?.title}</div>
            <div>{ note?.date_noted}</div>
            <div>{ note?.med_notes }</div>
          </>
        ))}
      </div>
    </>
  );
}
