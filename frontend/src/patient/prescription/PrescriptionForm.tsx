/* eslint-disable react/button-has-type */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useMutation } from 'urql';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { AddPrescriptionDocument } from '../../queries.generated';
// import UpdatePrescription from './UpdatePrescription';

interface AddPrescFormProps {
  pID: number | undefined
  popup: React.Dispatch<React.SetStateAction<boolean>>
}

export default function PrescriptionForm(addPrescFormProps: AddPrescFormProps) {
  const [prescName, setPrescName] = useState('');
  const [dosage, setDosage] = useState(0);
  const [addPresc, setAddPresc] = useMutation(AddPrescriptionDocument);

  const { error, fetching } = addPresc;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

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

  return (
    <div className="popup">
      <div className="popup-inner">
        <h5>Add Prescription</h5>
        <button
          onClick={() => addPrescFormProps.popup(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>
        <div className="col">
          <div>
            <input
              type="text"
              placeholder="Enter Prescription"
              onChange={(e) => setPrescName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Enter Dosage"
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
    </div>
  );
  }