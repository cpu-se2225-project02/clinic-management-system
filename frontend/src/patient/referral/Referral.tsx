/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline, MdNearMe } from 'react-icons/md';
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
      {addReferral && (
        <ReferralForm
          referralBtn={setAddReferral}
          referralpopup={addReferral}
          pID={pID}
          popup={setAddReferral}
        />
      )}
      <div>
        {/* <> */}
        <Table className="table table-striped referrals">
          <thead>
            <tr>
              <th className="referralTitle" scope="col">
                <MdNearMe size={20} />
              </th>
              <th className="referralTitle" scope="col">REFERRED TO</th>
              <th className="referralTitle" scope="col">REFERRED BY</th>
              <th className="referralTitle" scope="col">
                <button className="btn btn-outline-secondary" onClick={() => setAddReferral(true)}>
                  <RiAddFill size={30} />
                  Add Referral
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.patientReferrals?.map((referral) => (
              <tr>
                <th scope="row">
                  <MdNearMe size={20} />
                </th>
                <td>
                  {referral?.hosp_name}
                </td>
                <td>
                  Dr.
                  {' '}
                  {referral?.doctor?.doc_name}
                </td>
                <td>
                  <div className="btn-group editAndDelete" role="group">
                    <button type="button" className="editAndDltBtn" onClick={() => onEditBtnClicked(referral?.id as number)}>
                      <BiEdit size={30} />
                    </button>
                    <button type="button" className="editAndDltBtn" onClick={() => onDeleteBtnClicked(referral?.id as number)}>
                      <MdDeleteOutline size={30} />
                    </button>
                  </div>
                  {updateReferral && (
                    <UpdateReferralForm
                      pID={pID}
                      popup={setUpdatReferral}
                      refID={editBtnValue}
                      updateReferral={updateReferral}
                      updateReferralBtn={setUpdatReferral}
                    />
                  )}
                  {deleteConfirmation && (
                    <ConfirmDelete
                      onDeleteTrue={handleDeleteTrue}
                      onDeleteFalse={handleDeleteFalse}
                      deleteModal={deleteConfirmation}
                      deleteModalBtn={setDeleteConfirmation}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}
export default Referral;
