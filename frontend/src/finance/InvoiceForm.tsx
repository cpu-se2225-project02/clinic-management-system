/* eslint-disable radix */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Table, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'urql';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { InvoiceDocument } from '../queries.generated';
import './InvoicePopup.css';

export default function InvoiceForm() {
  const params = useParams() as any;
  const patiendID = parseInt(params.id);
  const [theInvoice] = useQuery({
    query: InvoiceDocument,
    variables: {
      pID: patiendID,
    },
  });
  return (
    <>
      <Row>
        <Header />
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <h4>Generated Invoice</h4>
        <div className="invoice-form">
          <Table striped bordered>
            <thead>
              <th>Description</th>
              <th>Amount</th>
            </thead>
            <tbody>
              {theInvoice.data?.invoice?.map((inv) => (
                <tr>
                  <td>Description</td>
                  <td>
                    Php
                    {' '}
                    { inv?.ammnt_cost }
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div>
            Total:
          </div>
        </div>
        <Footer />
      </Row>
    </>
  );
}
