/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable radix */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { ReactNode, useState } from 'react';
import { Spinner, Modal } from 'react-bootstrap';
import { useMutation, useQuery } from 'urql';
import { AddBillDocument, AllPatientsDocument } from '../queries.generated';

interface Popup {
  addPaymentBtn: React.Dispatch<React.SetStateAction<boolean>>
  payForm: boolean
  patId?: number
  disabledSelect?: boolean
}

function BillForm({
  addPaymentBtn, payForm, patId = 0, disabledSelect = false,
}: Popup) {
  const [addPayment, setAddPayment] = useMutation(AddBillDocument);
  const [date, setDate] = useState('');
  const [ammtCost, setAmmtCost] = useState(0);
  const [ammtPd, setAmmtPd] = useState(0);
  const [id, setId] = useState(patId);

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
      bill: {
        ammnt_cost: ammtCost,
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
      <Modal.Header closeButton><h5>Add Bill</h5></Modal.Header>
      <Modal.Body>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text" htmlFor="inputGroupSelect01">Patient</label>
          </div>
          <select disabled={disabledSelect} className="custom-select" id="inputGroupSelect01" onChange={(e) => setId(parseInt(e.target.value))} required>
            <option selected>Select a patient</option>
            {data?.patients?.map((patient) => {
              if (patient?.id === id) {
                return (
                  <option selected value={patient?.id}>
                    {patient?.f_name}
                    {' '}
                    {patient?.l_name}
                  </option>
                );
              }
              return (
                <option value={patient?.id}>
                  {patient?.f_name}
                  {' '}
                  {patient?.l_name}
                </option>
              );
            }) as any as ReactNode}
          </select>
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

export default BillForm;
