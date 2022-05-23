/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { RiAddFill } from 'react-icons/ri';
// import { BiEdit } from 'react-icons/bi';
import { PatientPrescriptionsDocument } from '../../queries.generated';
import PrescriptionForm from './PrescriptionForm';

interface PatientID {
  pID: undefined | number
}

export default function Prescription({ pID }: PatientID) {
  const [addPrescBtn, setAddPrescBtn] = useState(false);

  const [patientPrescriptions] = useQuery({
    query: PatientPrescriptionsDocument,
    variables: {
      patientId: pID as number,
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
      <div>
        <button onClick={() => { setAddPrescBtn(true); }} className="btn btn-outline-secondary">
          <RiAddFill size={30} />
          Add Prescription
        </button>

      </div>
      {addPrescBtn && <PrescriptionForm popup={setAddPrescBtn} pID={pID as number} />}
      {data?.patientPrescriptions?.length !== 0
        ? data?.patientPrescriptions?.map((prescription) => (
          <div>
            <div>
              Prescription Name:
              {' '}
              {prescription?.pres_name}
            </div>
            <div>
              Prescription Dosage:
              {' '}
              {prescription?.pres_dos}
            </div>
            <hr />
          </div>

        ))
        : <div>No prescription given to patient.</div>}
    </>
  );
}
