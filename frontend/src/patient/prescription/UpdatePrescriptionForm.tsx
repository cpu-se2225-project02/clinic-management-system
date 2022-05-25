/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import { EditPrescriptionDocument, PatientPrescriptionsDocument } from '../../queries.generated';

interface UpdatePrescFormProps {
  prescID: number | undefined
  pID: number | undefined
  popup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdatePrescriptionForm(updatePrescFormProps: UpdatePrescFormProps) {
  const [editPrescription, setEditPrescription] = useMutation(EditPrescriptionDocument);

  const [patientPrescriptions] = useQuery({
    query: PatientPrescriptionsDocument,
    variables: {
      patientId: updatePrescFormProps.pID as number,
    },
  });

  const { data } = patientPrescriptions;
  const [prescName, setPrescName] = useState(data?.patientPrescriptions?.find((prescription) => prescription?.id === updatePrescFormProps.prescID)?.pres_name);
  const [prescDos, setPrescDos] = useState(data?.patientPrescriptions?.find((prescription) => prescription?.id === updatePrescFormProps.prescID)?.pres_dos);

  const { error, fetching } = editPrescription;

  const updatePrescription = () => {
    setEditPrescription({
      editedPrescription: {
        pres_name: prescName as string,
        pres_dos: prescDos as number,
      },
      prescriptionId: updatePrescFormProps.prescID as number,
    });
  };

  const onSubmitBtnClicked = () => {
    updatePrescription();
    updatePrescFormProps.popup(false);
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
          <AiOutlineCloseSquare size={25} onClick={() => updatePrescFormProps.popup(false)} />
        </button>
        Prescription Name:
        <div>
          <input
            type="text"
            placeholder="Prescription name"
            value={prescName}
            onChange={(e) => setPrescName(e.target.value)}
          />
        </div>
        Prescription Dosage:
        <div>
          <input
            type="number"
            placeholder="Prescription dosage"
            value={prescDos}
            onChange={(e) => setPrescDos(parseInt(e.target.value))}
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
