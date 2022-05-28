/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Button, Modal, Spinner } from 'react-bootstrap';
import './InvoicePopup.css';
import { useQuery } from 'urql';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { AllPatientsDocument } from '../queries.generated';
import PatientRecord from '../patient/PatientRecord';

interface Popup {
  invPop: React.Dispatch<React.SetStateAction<boolean>>
  invForm: boolean
}

export default function PatientAccountPopup({ invPop, invForm }: Popup) {
  const navigate = useNavigate();
  const [id, setId] = useState(0);

  const [allPatients] = useQuery({
    query: AllPatientsDocument,
  });

  const { data, error, fetching } = allPatients;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  console.log(id);

  return (
    <Modal show={invForm} onHide={() => invPop(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>View Patient Account</h5></Modal.Header>
      <Modal.Body>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Generate for</label>
          </div>
          <select
            className="custom-select sl"
            id="inputGroupSelect01"
            required
            onChange={(e) => setId(parseInt(e.target.value))}
          >
            <option selected>Select a patient</option>
            {data?.patients?.map((patient) => (
              <option value={patient?.id}>
                {patient?.f_name}
                {' '}
                {patient?.l_name}
              </option>
            ))}
          </select>
        </div>
        <Button
          className="float-end"
          onClick={() => navigate(`/patient_record/${id}`)}
        >
          Open
        </Button>
        <Routes>
          <Route path=":id/" element={<PatientRecord accountToggle />} />
        </Routes>
      </Modal.Body>
    </Modal>
  );
}
