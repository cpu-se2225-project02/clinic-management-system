/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Modal } from 'react-bootstrap';
// import { AiOutlineCloseSquare } from 'react-icons/ai';
import { AddMedHistoryDocument } from '../../queries.generated';

interface AddMedHistoryFormProps {
    pID: number | undefined
    popup: React.Dispatch<React.SetStateAction<boolean>>
    medHistoryBtn: React.Dispatch<React.SetStateAction<boolean>>
    medHistorypopup: boolean
}

export default function medHistoryForm(addMedHistoryFormProps: AddMedHistoryFormProps) {
  const [Diagnosis, setdiagnosis] = useState('');
  const [Treatmentplan, settreatmentplan] = useState('');
  const [Description, setdescription] = useState('');
  const [addmedHistory, setAddmedHistory] = useMutation(AddMedHistoryDocument);

  const addMedHistory = () => {
    setAddmedHistory({
      newMedHistory: {
        diagnosis: Diagnosis,
        treatment_plan: Treatmentplan,
        description: Description,
        patient_id: addMedHistoryFormProps.pID as number,
      },
    });
  };
  const onSubmitBtnClicked = () => {
    addMedHistory();
    addMedHistoryFormProps.popup(false);
  };
  console.log(addmedHistory);
  return (
    <Modal
      show={addMedHistoryFormProps.medHistorypopup}
      onHite={() => addMedHistoryFormProps.medHistoryBtn(false)}
      className="mt-5 mb-5"
      backdrop="static"
    >

      <Modal.Header closeButton><h5>Add Medical History</h5></Modal.Header>
      <Modal.Body>
        <div className="AddMedHistoryForm">
          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Diagnosis</span>
              <input
                type="text"
                placeholder="Enter Diagnosis"
                className="form-control"
                onChange={(e) => setdiagnosis(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Treatment Plan</span>
              <input
                type="text"
                placeholder="Enter Treatment Plan"
                className="form-control"
                onChange={(e) => settreatmentplan(e.target.value)}
              />
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Description</span>
              <input
                type="text"
                placeholder="Enter Description"
                className="form-control"
                onChange={(e) => setdescription(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary mt-2 float-end"
              onClick={onSubmitBtnClicked}
              type="submit"
            >
              Submit
            </button>

          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
