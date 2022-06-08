/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import ConfirmEdit from '../../common/ConfirmEdit';
import { EditMedHistoryDocument, PatientMedHistoryDocument } from '../../queries.generated';

interface UpdateMedHistoryFormProps {
  medHistoryID: number | undefined
  pID: number | undefined
  updateMedHistoryBtn: React.Dispatch<React.SetStateAction<boolean>>
  updateMedHistory: boolean
  popup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdateMedHistoryForm(updateMedHistoryFormProps: UpdateMedHistoryFormProps) {
  const [editMedHistory, setEditMedHistory] = useMutation(EditMedHistoryDocument);
  const [editConfirmation, setEditConfirmation] = useState(false);

  const [patientMedHistory] = useQuery({
    query: PatientMedHistoryDocument,
    variables: {
      patientId: updateMedHistoryFormProps.pID as number,
    },
  });

  const { data } = patientMedHistory;
  const [Diagnosis, setdiagnosis] = useState(data?.patientMedHistory?.find((MedicalHistory) => MedicalHistory?.id === updateMedHistoryFormProps.medHistoryID)?.diagnosis);
  const [Treatmentplan, settreatmentplan] = useState(data?.patientMedHistory?.find((MedicalHistory) => MedicalHistory?.id === updateMedHistoryFormProps.medHistoryID)?.treatment_plan);
  const [Description, setDescription] = useState(data?.patientMedHistory?.find((MedicalHistory) => MedicalHistory?.id === updateMedHistoryFormProps.medHistoryID)?.description);

  const { error, fetching } = editMedHistory;

  const updateMedHistory = () => {
    setEditMedHistory({
      editedMedHistory: {
        diagnosis: Diagnosis as string,
        treatment_plan: Treatmentplan as string,
        description: Description as string,
      },
      medicalhistoryId: updateMedHistoryFormProps.medHistoryID as number,
    });
  };

  const onSubmitBtnClicked = () => {
    setEditConfirmation(true);
  };

  const handleEditTrue = () => {
    updateMedHistory();
    updateMedHistoryFormProps.popup(false);
    setEditConfirmation(false);
  };

  const handleEditFalse = () => {
    setEditConfirmation(false);
  };

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  return (
    <div className="popup">

      <Modal show={updateMedHistoryFormProps.updateMedHistory} onHide={() => updateMedHistoryFormProps.updateMedHistoryBtn(false)} className="mt-5" backdrop="static"> 
        <Modal.Header closeButton><h5>Edit Medical History</h5></Modal.Header>
        <Modal.Body>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Diagnosis</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Diagnosis"
                value={Diagnosis}
                onChange={(e) => setdiagnosis(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Treatment Plan</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Diagnosis"
                value={Treatmentplan}
                onChange={(e) => settreatmentplan(e.target.value)}
              />
            </div>
          </div>

          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Description</label>
            </div>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Description"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <button
            className="btn btn-primary mt-2 float-end"
            type="submit"
            onClick={onSubmitBtnClicked}
          >
            Submit
          </button>
          {editConfirmation && (<ConfirmEdit onEditTrue={handleEditTrue} onEditFalse={handleEditFalse} editModal={editConfirmation} setEditModal={setEditConfirmation} />)}
        </Modal.Body>
      </Modal>
    </div>
  );
}
