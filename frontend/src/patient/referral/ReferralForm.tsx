/* eslint-disable no-unused-vars */
/* eslint-disable radix */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import { AddReferralDocument, AllDocsDocument } from '../../queries.generated';

interface AddReferralFormProps {
  pID: undefined | number,
  popup: React.Dispatch<React.SetStateAction<boolean>>
  referralBtn: React.Dispatch<React.SetStateAction<boolean>>
  referralpopup: boolean
}
function ReferralForm(addReferralProps: AddReferralFormProps) {
  const [addReferral, setAddReferral] = useMutation(AddReferralDocument);
  const [doctorID, setDoctorID] = useState(0);
  const [hospital, setHospital] = useState('');

  const [allDoctors] = useQuery({
    query: AllDocsDocument,
  });

  const addingReferral = () => {
    setAddReferral({
      newReferral: {
        doctor_id: doctorID,
        hosp_name: hospital,
        patient_id: addReferralProps.pID as number,
      },
    });
  };

  const onSubmitBtnClicked = () => {
    addingReferral();
    addReferralProps.popup(false);
  };

  const { data } = allDoctors;
  return (
    <Modal
      show={addReferralProps.referralpopup}
      onHide={() => addReferralProps.referralBtn(false)}
      className="mt-5 mb-5"
      backdrop="static"
    >
      <Modal.Header closeButton><h5>Add a Referral</h5></Modal.Header>
      <Modal.Body>

        <h5>Add Referral</h5>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Hospital</span>
          <input type="text" className="form-control" aria-label="Hospital" aria-describedby="basic-addon1" onChange={(e) => setHospital(e.target.value)} />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Doctor</label>
          <select className="form-select" id="inputGroupSelect01" onChange={(e) => setDoctorID(parseInt(e.target.value))} required>
            <option selected>Select...</option>
            {data?.allDoctors?.map((doc) => (
              <option value={doc?.id}>{doc?.doc_name}</option>
            ))}
          </select>
        </div>

        <button
          className="btn btn-primary mt-2 float-end"
          type="submit"
          onClick={onSubmitBtnClicked}
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>
  );
}

export default ReferralForm;
