/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useMutation, useQuery } from 'urql';
import ConfirmEdit from '../../common/ConfirmEdit';
import { AllDocsDocument, EditReferralDocument, PatientReferralsDocument } from '../../queries.generated';

interface UpdateRefFormProps {
  refID: number | undefined
  pID: number | undefined
  popup: React.Dispatch<React.SetStateAction<boolean>>
  updateReferralBtn: React.Dispatch<React.SetStateAction<boolean>>
  updateReferral: boolean
}
function UpdateReferralForm(props: UpdateRefFormProps) {
  // eslint-disable-next-line no-unused-vars
  const [editRef, setEditRef] = useMutation(EditReferralDocument);
  const [editConfirmation, setEditConfirmation] = useState(false);
  const [allDoctors] = useQuery({
    query: AllDocsDocument,
  });
  const [patientReferrals] = useQuery({
    query: PatientReferralsDocument,
    variables: {
      patientId: props.pID as number,
    },
  });

  const { data } = patientReferrals;

  const [doctorID, setDoctorID] = useState(data?.patientReferrals?.find((ref) => ref?.id === props.refID)?.doctor?.id);
  const [hospitalName, setHospitalName] = useState(data?.patientReferrals?.find((ref) => ref?.id === props.refID)?.hosp_name);

  const updateReferral = () => {
    setEditRef({
      editedReferral: {
        hosp_name: hospitalName as string,
        doctor_id: doctorID as number,
      },
      referralID: props.refID as number,
    });
  };

  const onSubmitBtnClicked = () => {
    setEditConfirmation(true);
  };

  const handleEditTrue = () => {
    updateReferral();
    props.popup(false);
    setEditConfirmation(false);
  };

  const handleEditFalse = () => {
    setEditConfirmation(false);
  };

  return (
    <Modal show={props.updateReferral} onHide={() => props.updateReferralBtn(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>Edit Prescription</h5></Modal.Header>
      <Modal.Body>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">Hospital</span>
          <input type="text" className="form-control" value={hospitalName} aria-label="Hospital" aria-describedby="basic-addon1" onChange={(e) => setHospitalName(e.target.value)} required />
        </div>
        <div className="input-group mb-3">
          <label className="input-group-text" htmlFor="inputGroupSelect01">Doctor</label>
          <select className="form-select" id="inputGroupSelect01" onChange={(e) => setDoctorID(parseInt(e.target.value))} required>
            <option selected>Select...</option>
            {allDoctors.data?.allDoctors?.map((doc) => (
              <option value={doc?.id}>{doc?.doc_name}</option>
            ))}
          </select>
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

export default UpdateReferralForm;
