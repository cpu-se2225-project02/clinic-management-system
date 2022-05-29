/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'urql';
import { MdAddCircleOutline } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { GetPatientAccountDocument } from '../../queries.generated';
import AddPaymentForm from './AddPaymentForm';
import './PatientAccount.css';

interface PatientId {
  pID: number | undefined
}

function PatientAccount({ pID }: PatientId) {
  const [addPayment, setAddPayment] = useState(false);
  const [patientAccount] = useQuery({
    query: GetPatientAccountDocument,
    variables: {
      patientId: pID as number,
    },
  });

  const { data, error, fetching } = patientAccount;

  if (fetching) {
    return <Spinner animation="border" role="status" />;
  }

  if (error) {
    console.log(error);
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            {data?.account?.map((acc) => (
              <div>
                <div className="card">
                  <div className="card-header">
                    {Number(data.account?.indexOf(acc)) + 1}
                  </div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                      Date:
                      {' '}
                      {acc?.paymnt_dt}
                    </li>
                    <li className="list-group-item">
                      Ammount Cost:
                      {' ₱'}
                      {acc?.ammnt_cost}
                    </li>
                    <li className="list-group-item">
                      Ammount Paid:
                      {' ₱'}
                      {acc?.ammnt_paid}
                    </li>
                  </ul>

                </div>
              </div>
            ))}
          </div>

          <div className="col">
            <div className="col">
              <div className="right">
                <div className="btn-group" role="group">
                  <button type="button" className="editAndAdd">
                    <BiEdit size={30} />
                  </button>
                  <button type="button" className="editAndAdd" onClick={() => { setAddPayment(true); }}>
                    <MdAddCircleOutline size={30} />
                  </button>
                  {addPayment && (
                    <AddPaymentForm
                      patId={pID}
                      payForm={addPayment}
                      addPaymentBtn={setAddPayment}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {data?.account?.map((acc) => (
        <div>
          <div className="card">
            <div className="card-header">
              {Number(data.account?.indexOf(acc)) + 1}
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Date:
                {' '}
                {acc?.paymnt_dt}
              </li>
              <li className="list-group-item">
                Ammount Cost:
                {' ₱'}
                {acc?.ammnt_cost}
              </li>
              <li className="list-group-item">
                Ammount Paid:
                {' ₱'}
                {acc?.ammnt_paid}
              </li>
            </ul>
            <hr />
          </div>
        </div>
      ))} */}
    </div>
  );
}
export default PatientAccount;
