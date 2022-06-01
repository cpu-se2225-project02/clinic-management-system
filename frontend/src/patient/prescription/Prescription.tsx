/* eslint-disable radix */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable react/button-has-type */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-useless-fragment */
import React, { useState } from 'react';
import { useMutation, useQuery } from 'urql';
import { Spinner } from 'react-bootstrap';
import { RiAddFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { DeletePrescriptionDocument, PatientPrescriptionsDocument } from '../../queries.generated';
import PrescriptionForm from './PrescriptionForm';
import UpdatePrescriptionForm from './UpdatePrescriptionForm';
import './Prescription.css';

interface PatientID {
  pID: undefined | number
}

export default function Prescription({ pID }: PatientID) {
  const [addPrescBtn, setAddPrescBtn] = useState(false);
  const [updatePrescBtn, setUpdatePrescBtn] = useState(false);
  const [editBtnValue, setEditBtnValue] = useState(0);
  const [deletePresc, setDeletePresc] = useMutation(DeletePrescriptionDocument);

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

  if (deletePresc.error) {
    console.log(error);
    return <div>Deletion unsuccessful</div>;
  }
  const deletePrescription = (id: number) => {
    setDeletePresc({
      prescId: id,
    });
  };

  const onEditBtnClicked = (value: number) => {
    setEditBtnValue(value);
    setUpdatePrescBtn(true);
  };
  return (
    <>
      {addPrescBtn && <PrescriptionForm popup={setAddPrescBtn} pID={pID as number} />}
      <div className="col-sm-11">
        <button onClick={() => { setAddPrescBtn(true); }} className="btn btn-outline-secondary">
          <RiAddFill size={30} />
          Add Prescription
        </button>
      </div>
      {data?.patientPrescriptions?.length !== 0
        ? data?.patientPrescriptions?.map((prescription) => (
          <>
            <div className="container">
              <div className="row">
                <div className="col-sm-1">
                  <div className="btn-group" role="group">
                    <button type="button" className="editAndDltBtn" onClick={() => onEditBtnClicked(prescription?.id as number)}>
                      <BiEdit size={30} />
                    </button>
                    <button type="button" className="editAndDltBtn" onClick={() => deletePrescription(prescription?.id as number)}>
                      <MdDeleteOutline size={30} />
                    </button>
                    {updatePrescBtn && <UpdatePrescriptionForm popup={setUpdatePrescBtn} pID={pID as number} prescID={editBtnValue} />}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="prescriptions">
                <div className="medicine">
                  {prescription?.pres_name}
                </div>
                Dosage:
                {' '}
                {prescription?.pres_dos}
                {' '}
                <br />
                Number of times a day/ week
                <br />
              </div>
              <hr />
            </div>
          </>
        ))
        : <div>No prescription given to patient.</div>}
    </>
  );
}
