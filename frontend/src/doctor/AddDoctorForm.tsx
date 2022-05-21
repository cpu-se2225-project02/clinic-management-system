/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation } from 'urql';
import { AddDoctorDocument } from '../queries.generated';

interface Popup {
    addDoctorBtn: React.Dispatch<React.SetStateAction<boolean>>;
  }
function AddDoctorForm({ addDoctorBtn }: Popup) {
  const [docName, setDocName] = useState('');
  const [addDoctor, setAddDoctor] = useMutation(AddDoctorDocument);

  const { data, error, fetching } = addDoctor;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  const addingDoctor = () => {
    setAddDoctor({
      newDoctor: {
        doc_name: docName,
      },
    }).then((res) => console.log(res));
  };

  const onSubmitBtnClicked = () => {
    addingDoctor();
    addDoctorBtn(false);
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <h5>Add Doctor</h5>
        <button
          onClick={() => addDoctorBtn(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Name</span>
          </div>
          <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" onChange={(e) => setDocName(e.target.value)} />
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
  );
}

export default AddDoctorForm;
