/* eslint-disable no-trailing-spaces */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import { EditMedHistoryDocument, PatientMedHistoryDocument } from '../../queries.generated';

interface UpdateMedHistoryFormProps {
    medHistoryID: number | undefined
    pID: number | undefined
    popup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdateMedHistoryForm(updateMedHistoryFormProps: UpdateMedHistoryFormProps) {
  const [editMedHistory, setEditMedHistory] = useMutation(EditMedHistoryDocument);

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
    updateMedHistory();
    updateMedHistoryFormProps.popup(false);
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
      <div className="popup-inner">
        <h5>Update Prescription</h5>
        <button
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} onClick={() => updateMedHistoryFormProps.popup(false)} />
        </button>
        Diagnosis
        <div>
          <input
            type="text"
            placeholder="Diagnosis"
            value={Diagnosis}
            onChange={(e) => setdiagnosis(e.target.value)}
          />
        </div>
        Treatment Plan: 
        <div>
          <input
            type="text"
            placeholder="Treatment Plan"
            value={Treatmentplan}
            onChange={(e) => settreatmentplan(e.target.value)}
          />
        </div>
        Description:
        <div>
          <input
            type="text"
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary mt-2 float-end"
          type="submit"
          onClick={onSubmitBtnClicked}
        >
          Submit
        </button>

      </div>
    </div>
  );
}
