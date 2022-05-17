/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';
import { useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { GetPrescriptionDocument } from '../../queries.generated';

interface PatientID {
    pID: number | undefined
}

interface Popup {
  postButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Prescription({ pID }: PatientID) {
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
    return <div>Something went wrong</div>;
  }
  return (
    <>
      {data?.patientPrescriptions?.map((prescription) => (
        <div>
          {prescription?.pres_name}
          {prescription?.pres_dos}
        </div>
      ))}
    </>
  );
}
