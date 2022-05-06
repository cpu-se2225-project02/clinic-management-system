/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';

function Clinic() {
  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>
        <Col>
          <h1>Clinic</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Clinic;
