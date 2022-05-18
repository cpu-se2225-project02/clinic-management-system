import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'urql';
import { GetPatientAccountDocument } from '../../queries.generated';

interface PatientId {
    pID: number | undefined
}

function PatientAccount({ pID }: PatientId) {
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
            {' '}
            {acc?.ammnt_cost}
            {' '}
            Ammount Paid:
            {' '}
            {acc?.ammnt_payed}
            {' '}
            Change:
            {' '}
            {acc!.ammnt_cost - acc!.ammnt_payed}
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
