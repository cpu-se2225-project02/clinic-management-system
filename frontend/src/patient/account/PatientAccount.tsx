/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import { useQuery } from 'urql';
import { MdReceiptLong, MdPayment } from 'react-icons/md';
// import { BiEdit } from 'react-icons/bi';
import { GetPatientAccountDocument } from '../../queries.generated';
import AddPaymentForm from './AddPaymentForm';
import './PatientAccount.css';
import BillForm from '../../finance/BillForm';

interface PatientId {
  pID: number | undefined
}

function PatientAccount({ pID }: PatientId) {
  const [addPayment, setAddPayment] = useState(false);
  const [addBill, setAddBill] = useState(false);
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

      <Table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date</th>
            <th scope="col">Amount Cost</th>
            <th scope="col">Amount Paid</th>
            <th scope="col">
              {/* <div className="btn-group" role="group"> */}
              {/* <button type="button" className="editAndAdd">
                  <BiEdit size={30} />
                </button> */}
              <button type="button" className="editAndAdd" onClick={() => { setAddPayment(true); }}>
                <MdPayment size={30} />
                PAYMENT
              </button>
              {addPayment && (
                <AddPaymentForm
                  patId={pID}
                  payForm={addPayment}
                  disabledSelect
                  addPaymentBtn={setAddPayment}
                />
              )}
              <button type="button" className="editAndAdd" onClick={() => { setAddBill(true); }}>
                <MdReceiptLong size={30} />
                BILL
              </button>
              {addBill && (
                <BillForm
                  payForm={addBill}
                  disabledSelect
                  addPaymentBtn={setAddBill}
                  patId={pID}
                />
              )}
              {/* </div> */}
            </th>
          </tr>
        </thead>
        <tbody>
          {data?.account?.map((acc) => (
            <tr>
              <th scope="row">
                {Number(data.account?.indexOf(acc)) + 1}
              </th>
              <td>
                {new Date(acc?.paymnt_dt as string).toDateString()}
                {/* {acc?.paymnt_dt} */}
              </td>
              <td>
                {'₱ '}
                {acc?.ammnt_cost}
                .00
              </td>
              <td>
                {'₱ '}
                {acc?.ammnt_paid}
                .00
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default PatientAccount;
