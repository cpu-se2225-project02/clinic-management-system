/* eslint-disable max-len */
/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { useMutation, useQuery } from 'urql';
import { AllDocsDocument, EditReferralDocument, PatientReferralsDocument } from '../../queries.generated';

interface UpdateRefFormProps {
    refID: number | undefined
    pID: number | undefined
    popup: React.Dispatch<React.SetStateAction<boolean>>
}
function UpdateReferralForm(props: UpdateRefFormProps) {
  // eslint-disable-next-line no-unused-vars
  const [editRef, setEditRef] = useMutation(EditReferralDocument);
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
    updateReferral();
    props.popup(false);
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h1>{props.refID}</h1>
        <h5>Update Referral</h5>
        <button
          onClick={() => props.popup(false)}
          className="btn close-btn float-end mt-0"
        >
          <AiOutlineCloseSquare size={25} />
        </button>
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
      </div>
    </div>
  );
}

export default UpdateReferralForm;
