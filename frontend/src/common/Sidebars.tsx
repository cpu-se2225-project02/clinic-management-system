/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React from 'react';
import {
  Container, Col, Row, Button, Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebars.css';

export default function Sidebars() {
  return (
    <Container fluid>
      <Col className="sidebar">

        <Row>
          <Image
            className="card-img-top"
            fluid
            src="https://res.cloudinary.com/dmro06tbx/image/upload/v1650564665/techniche_tihcko.png"
          />
        </Row>

        <Row>
          <div className="card-title" data-testid="card-title">
            Clinic Name
          </div>
        </Row>

        <Link to="/" className="sidebar-link" data-testid="dashboard-link">
          <Row>
            <Button className="list-group-item" data-testid="dashboard-btn">
              Dashboard
            </Button>
          </Row>
        </Link>

        <Link to="/clinic" className="sidebar-link" data-testid="clinic-link">
          <Row>
            <Button className="list-group-item">
              Clinic
            </Button>
          </Row>
        </Link>

        <Link to="/appointments" className="sidebar-link" data-testid="appointments-link">
          <Row>
            <Button className="list-group-item">
              Appointments
            </Button>
          </Row>
        </Link>

        <Link to="/patients" className="sidebar-link" data-testid="patients-link">
          <Row>
            <Button className="list-group-item">
              Patients
            </Button>
          </Row>
        </Link>

        <Link to="/finance" className="sidebar-link" data-testid="finance-link">
          <Row>
            <Button className="list-group-item">
              Finance
            </Button>
          </Row>
        </Link>

      </Col>
    </Container>
  );
}
