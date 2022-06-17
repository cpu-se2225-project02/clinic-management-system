/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-return-assign */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { ReactElement, useEffect, useState } from 'react';
import {
  Col, Row, Container, Form, Dropdown, Button, Card, Table,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlinePayment, MdPayments } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { FaFileInvoice } from 'react-icons/fa';
import { useQuery } from 'urql';
import { GrMoney } from 'react-icons/gr';
import './FinancePage.css';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import AddPaymentForm from '../patient/account/AddPaymentForm';
import Footer from '../common/Footer';
import { AllPaymentsDocument } from '../queries.generated';
import InvoicePopup from './InvoicePopup';
import BillForm from './BillForm';
import PatientAccountPopup from './PatientAccountPopup';

export default function FinancePage() {
  const navigate = useNavigate();
  const [AddPaymentBtn, setAddPaymentBtn] = useState(false);
  const [PayForm, setPayForm] = useState(false);
  const [BillingForm, setBillForm] = useState(false);
  const handleBIllForm = () => setBillForm(true);
  const handleShowPayForm = () => setPayForm(true);
  const [InvPop, setInvPop] = useState(false);
  const [AccPop, setAccPop] = useState(false);
  const handleShowInvPop = () => setInvPop(true);
  const handleAccPop = () => setAccPop(true);
  const [allPayments] = useQuery({
    query: AllPaymentsDocument,
  });
  console.log(allPayments.data?.allPayments);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="financePage">
          <Row className="mt-3">
            <Col>
              <Card style={{
                width: '18rem',
                textAlign: 'center',
                boxShadow: '0px 0px 6px 5px rgba(209,209,209,1)',
              }}
              >
                <Card.Body>
                  <div>
                    Php {allPayments.data?.allPayments?.length === 0
                    ? (0.00)
                    : allPayments.data?.allPayments?.map((payment) => payment?.ammnt_paid).reduce((prev, curr) => prev! + curr!)?.toFixed(2)}
                  </div>
                </Card.Body>
                <Card.Footer>
                  <GrMoney size={20} />
                  {' '}
                  Total Payments
                </Card.Footer>
              </Card>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={4} className="mt-2">
              <Card style={{
                width: '18rem',
                boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                borderRadius: '20px',
              }}
              >
                <Card.Body className="c-body">
                  <Card.Title><MdOutlinePayment size={80} /></Card.Title>
                  <Button
                    variant="secondary"
                    style={{ width: '100%' }}
                    onClick={handleBIllForm}
                  >
                    Add Bill
                  </Button>
                </Card.Body>
                {BillForm && <BillForm payForm={BillingForm} addPaymentBtn={setBillForm} />}
              </Card>
            </Col>
            {/* <Col xs={4} className="mt-2">
              <Card style={{
                width: '18rem',
                boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                borderRadius: '20px',
              }}
              >
                <Card.Body className="c-body">
                  <Card.Title><FaFileInvoice size={80} /></Card.Title>
                  <Button
                    variant="secondary"
                    style={{ width: '100%' }}
                    onClick={handleShowInvPop}
                  >
                    Generate Invoice
                  </Button>
                </Card.Body>
                {InvPop && <InvoicePopup invForm={InvPop} invPop={setInvPop} />}
              </Card>
            </Col> */}
            <Col xs={4} className="mt-2">
              <Card style={{
                width: '18rem',
                boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                borderRadius: '20px',
              }}
              >
                <Card.Body className="c-body">
                  <Card.Title><MdPayments size={80} /></Card.Title>
                  <Button
                    variant="secondary"
                    style={{ width: '100%' }}
                    onClick={handleAccPop}
                  >
                    View patients account
                  </Button>
                </Card.Body>
                {AccPop && <PatientAccountPopup invForm={AccPop} invPop={setAccPop} />}
              </Card>
            </Col>
            <Col xs={4} className="mt-2">
              <Card style={{
                width: '18rem',
                boxShadow: '10px 10px 5px 0px rgba(186,186,186,0.75)',
                borderRadius: '20px',
              }}
              >
                <Card.Body className="c-body">
                  <Card.Title><MdOutlinePayment size={80} /></Card.Title>
                  <Button
                    variant="secondary"
                    style={{ width: '100%' }}
                    onClick={handleShowPayForm}
                  >
                    Add Payment
                  </Button>
                </Card.Body>
                {PayForm && <AddPaymentForm payForm={PayForm} addPaymentBtn={setPayForm} />}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>

  );
}
