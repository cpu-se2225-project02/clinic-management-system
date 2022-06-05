/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from 'urql';
// import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { AddPrescriptionDocument } from '../../queries.generated';
import './PrescriptionForm.css';
// import UpdatePrescription from './UpdatePrescription';

interface AddPrescFormProps {
  pID: number | undefined
  popup: React.Dispatch<React.SetStateAction<boolean>>
  prescBtn: React.Dispatch<React.SetStateAction<boolean>>
  prescpopup: boolean
}

export default function PrescriptionForm(addPrescFormProps: AddPrescFormProps) {
  const [prescName, setPrescName] = useState('');
  const [dosage, setDosage] = useState(0);
  const [addPresc, setAddPresc] = useMutation(AddPrescriptionDocument);

  // const { error, fetching } = addPresc;

  // if (fetching) {
  //   return <Spinner animation="border" role="status" />;
  // }
  // if (error) {
  //   console.log(error);
  //   return <div>Insertion unsuccessful</div>;
  // }

  const addPrescription = () => {
    setAddPresc({
      newPrescription: {
        pres_name: prescName,
        pres_dos: dosage,
        patient_id: addPrescFormProps.pID as number,
      },
    });
  };
  const onSubmitBtnClicked = () => {
    addPrescription();
    addPrescFormProps.popup(false);
  };
  console.log(addPresc);
  return (
    <Modal
      show={addPrescFormProps.prescpopup}
      onHide={() => addPrescFormProps.prescBtn(false)}
      className="mt-5 mb-5"
      backdrop="static"
    >
      <Modal.Header closeButton><h5>Add a Prescription</h5></Modal.Header>
      <Modal.Body>

        <div className="AddPrescriptionForm">

          <div className="col">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Prescription Name</span>
              <input
                type="text"
                placeholder="Enter Prescription"
                className="form-control"
                onChange={(e) => setPrescName(e.target.value)}
              />
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Dosage</span>
              <input
                type="number"
                placeholder="Enter Dosage"
                className="form-control"
                onChange={(e) => setDosage(parseInt(e.target.value))}
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
