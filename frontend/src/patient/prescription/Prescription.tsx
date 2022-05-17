/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { GoDiffAdded } from 'react-icons/go';
import { GetPrescriptionDocument } from '../../queries.generated';
import PrescriptionForm from './PrescriptionForm';

interface PatientID {
    pID: number | undefined
}

export default function Prescription({ pID }: PatientID) {
  const [PostButton, setPostButton] = useState(false);

  const [patientPrescriptions] = useQuery({
    query: GetPrescriptionDocument,
    variables: {
      id: pID as number,
    },
  });
  const { data, error, fetching } = patientPrescriptions;
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
      { PostButton && <PrescriptionForm pID={pID} postButton={setPostButton} />}
      {data?.patientPrescriptions?.map((prescription) => (
        <div>
          {prescription?.pres_name}
          {prescription?.pres_dos}
        </div>
      ))}
    </>
  );
}
