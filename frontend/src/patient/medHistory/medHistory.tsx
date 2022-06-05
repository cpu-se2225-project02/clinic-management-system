/* eslint-disable no-shadow */
/* eslint-disable max-len */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-tag-spacing */
import React, { useState } from 'react';
import { useMutation, useQuery } from 'urql';
import {
  Spinner, Table, Row, Col,
} from 'react-bootstrap';
import { RiAddFill } from 'react-icons/ri';
import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';
import MedHistoryForm from './medHistoryForm';
import UpdateMedHistoryForm from './updateMedHistory';
import { DeleteMedHistoryDocument, PatientMedHistoryDocument } from '../../queries.generated';
import ConfirmDelete from '../../common/ConfirmDelete';

interface PatientID {
  pID: undefined | number
}

export default function MedicalHistory({ pID }: PatientID) {
  const [addMedHistoryBtn, setAddMedHistoryBtn] = useState(false);
  const [updateMedHistoryBtn, setUpdateMedHistoryBtn] = useState(false);
  const [editBtnValue, setEditBtnValue] = useState(0);
  const [deleteMedHistory, setDeleteMedHistory] = useMutation(DeleteMedHistoryDocument);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [id, setId] = useState(0);

  const [patientMedHistory] = useQuery({
    query: PatientMedHistoryDocument,
    variables: {
      patientId: pID as number,
    },
  });

  const { data, error, fetching } = patientMedHistory;
  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error.message);
    return <div>Load unsuccessful</div>;
  }

  if (deleteMedHistory.error) {
    console.log(error);
    return <div>Deletion unsuccessful</div>;
  }
  const deletemedHistory = (value: number) => {
    setDeleteMedHistory({
      medicalhistoryId: value,
    });
  };

  const onEditBtnClicked = (value: number) => {
    setEditBtnValue(value);
    setUpdateMedHistoryBtn(true);
  };

  const onDeleteBtnClicked = (value: number) => {
    setId(value);
    setDeleteConfirmation(true);
  };

  const handleDeleteTrue = () => {
    deletemedHistory(id);
    setDeleteConfirmation(false);
  };
  const handleDeleteFalse = () => {
    setDeleteConfirmation(false);
  };

  return (
    <>
      <Row>
        <Col>
          {addMedHistoryBtn && (
          <MedHistoryForm
            medHistorypopup={addMedHistoryBtn}
            medHistoryBtn={setAddMedHistoryBtn}
            popup={setAddMedHistoryBtn}
            pID={pID as number}
          />
          )}
          <div className="col-sm-11">
            <button onClick={() => { setAddMedHistoryBtn(true); }} className="btn btn-outline-secondary">
              <RiAddFill size={30} />
              Add Medical History
            </button>
          </div>
        </Col>
      </Row>
      <Table className="table">
        <thead>
          <tr>
            <th scope="col">Diagnosis</th>
            <th scope="col">Treatment Plan</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.patientMedHistory?.length !== 0
            ? data?.patientMedHistory?.map((MedicalHistory) => (
              <tr>
                <td>{MedicalHistory?.diagnosis}</td>
                <td>{MedicalHistory?.treatment_plan}</td>
                <td>{MedicalHistory?.description}</td>
                <td>
                  <Col>
                    <div className="btn-group editAndDltBtn" role="group">
                      <button type="button" className="editAndDltBtn" onClick={() => onEditBtnClicked(MedicalHistory?.id as number)}>
                        <BiEdit size={30} />
                      </button>
                      <button type="button" className="editAndDltBtn" onClick={() => onDeleteBtnClicked(MedicalHistory?.id as number)}>
                        <MdDeleteOutline size={30} />
                      </button>
                      {updateMedHistoryBtn && (
                      <UpdateMedHistoryForm
                        popup={setUpdateMedHistoryBtn}
                        pID={pID as number}
                        medHistoryID={editBtnValue}
                        updateMedHistory={updateMedHistoryBtn}
                        updateMedHistoryBtn={setUpdateMedHistoryBtn}
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
                    </div>
                  </Col>
                </td>
              </tr>
            ))
            : <div>No Medical History given to patient.</div>}
        </tbody>
      </Table>
    </>
  );
}
