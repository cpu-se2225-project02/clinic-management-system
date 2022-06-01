/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import { RiAddFill } from 'react-icons/ri';
import { useMutation, useQuery } from 'urql';
import ConfirmDelete from '../../common/ConfirmDelete';
import { DeleteReferralDocument, PatientReferralsDocument } from '../../queries.generated';
import ReferralForm from './ReferralForm';
import UpdateReferralForm from './UpdateReferralForm';
import './Referral.css';

interface PatientID {
  pID: undefined | number
}

function Referral({ pID }: PatientID) {
  const [addReferral, setAddReferral] = useState(false);
  const [updateReferral, setUpdatReferral] = useState(false);
  const [editBtnValue, setEditBtnValue] = useState(0);
  const [deleteRef, setDeleteRef] = useMutation(DeleteReferralDocument);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [id, setId] = useState(0);
  const [patientReferrals] = useQuery({
    query: PatientReferralsDocument,
    variables: {
      patientId: pID as number,
    },
  });

  const { data, error, fetching } = patientReferrals;

  const deleteReferral = (value: number) => {
    setDeleteRef({
      referralId: value,
    });
  };

  const onEditBtnClicked = (value: number) => {
    setEditBtnValue(value);
    setUpdatReferral(true);
  };

  const onDeleteBtnClicked = (value: number) => {
    setId(value);
    setDeleteConfirmation(true);
  };

  const handleDeleteTrue = () => {
    deleteReferral(id);
    setDeleteConfirmation(false);
  };
  const handleDeleteFalse = () => {
    setDeleteConfirmation(false);
  };

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error);
    return <div>Patient Referrals Error</div>;
  }

  return (
    <>
      {addReferral && <ReferralForm pID={pID} popup={setAddReferral} />}
      <div className="col-sm-11">
        <button className="btn btn-outline-secondary" onClick={() => setAddReferral(true)}>
          <RiAddFill size={30} />
          Add Referral
        </button>
      </div>
      <div>
        {data?.patientReferrals?.map((referral) => (
          <>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="btn-group editAndDelete" role="group">
                    <button type="button" className="editAndDltBtn" onClick={() => onEditBtnClicked(referral?.id as number)}>
                      <BiEdit size={30} />
                    </button>
                    <button type="button" className="editAndDltBtn" onClick={() => onDeleteBtnClicked(referral?.id as number)}>
                      <MdDeleteOutline size={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {updateReferral && <UpdateReferralForm pID={pID} popup={setUpdatReferral} refID={editBtnValue} />}
            {deleteConfirmation && <ConfirmDelete onDeleteTrue={handleDeleteTrue} onDeleteFalse={handleDeleteFalse} />}
            <div className="referredHospital">
              {referral?.hosp_name}
              <br />
              {referral?.doctor?.doc_name}
            </div>
            <hr />
          </>
        ))}
      </div>
    </>
  );
}

export default Referral;
