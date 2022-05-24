/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { Spinner, Modal } from 'react-bootstrap';
import { useMutation, useQuery } from 'urql';
import { AddPaymentDocument, AllPatientsDocument } from '../../queries.generated';

interface Popup {
  addPaymentBtn: React.Dispatch<React.SetStateAction<boolean>>
  payForm: boolean
}

function AddPaymentForm({ addPaymentBtn, payForm }: Popup) {
  const [addPayment, setAddPayment] = useMutation(AddPaymentDocument);
  const [date, setDate] = useState('');
  const [ammtCost, setAmmtCost] = useState(0);
  const [ammtPd, setAmmtPd] = useState(0);
  const [id, setId] = useState(0);

  const [allPatients] = useQuery({
    query: AllPatientsDocument,
  });

  const { data, error, fetching } = allPatients;

  if (addPayment.fetching) {
    return <Spinner animation="border" role="status" />;
  }
  if (addPayment.error) {
    console.log(error);
    return <div>Insertion unsuccessful</div>;
  }

  const addingPayment = () => {
    setAddPayment({
      newPayment: {
        paymnt_dt: date,
        ammnt_cost: ammtCost,
        ammnt_payed: ammtPd,
        patient_id: id,
      },
    }).then((res) => console.log(res));
  };

  const onSubmitBtnClicked = () => {
    addingPayment();
    addPaymentBtn(false);
  };

  return (
    <Modal show={payForm} onHide={() => addPaymentBtn(false)} className="mt-5" backdrop="static">
      <Modal.Header closeButton><h5>Add Payment</h5></Modal.Header>
      <Modal.Body>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Patient</label>
          </div>
          <select className="custom-select" id="inputGroupSelect01" onChange={(e) => setId(parseInt(e.target.value))}>
            {data?.patients?.map((patient) => (
              <option value={patient?.id}>
                {patient?.f_name}
                {' '}
                {patient?.l_name}
              </option>
            ))}
          </select>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Date</span>
          </div>
          <input type="date" className="form-control" placeholder="Date" aria-label="Date" aria-describedby="basic-addon1" onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Ammount Cost ₱</span>
          </div>
          <input type="number" className="form-control" aria-label="Amount (to the nearest peso)" onChange={(e) => { setAmmtCost(parseInt(e.target.value)); }} />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Ammount Payed ₱</span>
          </div>
          <input type="number" className="form-control" aria-label="Amount (to the nearest peso)" onChange={(e) => { setAmmtPd(parseInt(e.target.value)); }} />
          <div className="input-group-append">
            <span className="input-group-text">.00</span>
          </div>
        </div>
        <button
          className="btn btn-primary mt-2 float-end"
          onClick={onSubmitBtnClicked}
          type="submit"
        >
          Submit
        </button>

      </Modal.Body>
    </Modal>

  );
}

export default AddPaymentForm;
