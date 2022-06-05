/* eslint-disable radix */
/* eslint-disable max-len */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import ConfirmEdit from '../../common/ConfirmEdit';
import { EditPrescriptionDocument, PatientPrescriptionsDocument } from '../../queries.generated';

interface UpdatePrescFormProps {
  prescID: number | undefined
  pID: number | undefined
  updatePrescBtn: React.Dispatch<React.SetStateAction<boolean>>
  updatePresc: boolean
  popup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function UpdatePrescriptionForm(updatePrescFormProps: UpdatePrescFormProps) {
  const [editPrescription, setEditPrescription] = useMutation(EditPrescriptionDocument);
  const [editConfirmation, setEditConfirmation] = useState(false);

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
    setEditConfirmation(true);
  };

  const handleEditTrue = () => {
    updatePrescription();
    updatePrescFormProps.popup(false);
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
    <Modal show={updatePrescFormProps.updatePresc} onHide={() => updatePrescFormProps.updatePrescBtn(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>Edit Prescription</h5></Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Prescription Name</label>
          </div>
          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Prescription name"
              value={prescName}
              onChange={(e) => setPrescName(e.target.value)}
            />
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Prescription Dosage</label>
          </div>
          <div>
            <input
              type="number"
              className="form-control"
              placeholder="Prescription dosage"
              value={prescDos}
              onChange={(e) => setPrescDos(parseInt(e.target.value))}
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
  );
}
