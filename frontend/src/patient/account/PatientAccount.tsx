/* eslint-disable no-unsafe-optional-chaining */
import React, { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'urql';
import { GoDiffAdded } from 'react-icons/go';
import { GetPatientAccountDocument } from '../../queries.generated';
import AddPaymentForm from './AddPaymentForm';

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
      <GoDiffAdded size={30} onClick={() => { setAddPayment(true); }} />
      {addPayment && (
      <AddPaymentForm
        patId={pID}
        payForm={addPayment}
        addPaymentBtn={setAddPayment}
      />
      )}
      {data?.account?.map((acc) => (
        <div>
          <div>
            {Number(data.account?.indexOf(acc)) + 1}
            {'. '}
            Date:
            {' '}
            {acc?.paymnt_dt}
            {' '}
            Ammount Cost:
            {' ₱'}
            {acc?.ammnt_cost}
            {' '}
            Ammount Paid:
            {' ₱'}
            {acc?.ammnt_paid}
            {' '}
            Change:
            {' ₱'}
            {/* {acc!.ammnt_paid - acc!.ammnt_cost} */}
          </div>
          <div>
            <hr />
          </div>
        </div>
      ))}
    </div>
  );
}

export default PatientAccount;
