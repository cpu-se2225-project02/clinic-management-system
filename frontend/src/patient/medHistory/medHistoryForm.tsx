/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { AddMedHistoryDocument } from '../../queries.generated';

interface AddMedHistoryFormProps {
    pID: number | undefined
    popup: React.Dispatch<React.SetStateAction<boolean>>
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
  if (addmedHistory.error) {
    console.log(addmedHistory.error);
  }
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="AddPrescriptionForm">
          <h5>Add Medical History</h5>

          <button
            onClick={() => addMedHistoryFormProps.popup(false)}
            className="btn close-btn float-end mt-0"
          >
            <AiOutlineCloseSquare size={25} />
          </button>

          <div className="col">
            <div>
              <input
                type="text"
                placeholder="Enter Diagnosis"
                onChange={(e) => setdiagnosis(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Treatment Plan"
                onChange={(e) => settreatmentplan(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter Description"
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
      </div>
    </div>
  );
}
