/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React, { ReactElement, useState } from 'react';
import {
  Col, Row, Container, Form, Dropdown, Button, Card,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import { MdOutlinePayment, MdPayments } from 'react-icons/md';
import { FaFileInvoice } from 'react-icons/fa';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import AddPaymentForm from '../patient/account/AddPaymentForm';

export default function FinancePage() {
  const [AddPaymentBtn, setAddPaymentBtn] = useState(false);
  const [PayForm, setPayForm] = useState(false);
  const handleShowPayForm = () => setPayForm(true);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10}>
          <Row>
            <Col xs={4} className="mt-2">
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
                  >
                    Generate Invoice
                  </Button>
                </Card.Body>
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
                  <Card.Title><MdPayments size={80} /></Card.Title>
                  <Button
                    variant="secondary"
                    style={{ width: '100%' }}
                  >
                    View patients account
                  </Button>
                </Card.Body>
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
    </Container>

  );
}
