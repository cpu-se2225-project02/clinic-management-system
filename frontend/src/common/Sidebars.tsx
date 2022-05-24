/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */

import React from 'react';
import {
  Container, Col, Row, Button, Image,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Sidebars.css';
import { AiOutlineDashboard, AiOutlineCalendar } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { FaRegMoneyBillAlt } from 'react-icons/fa';
import { BiClinic } from 'react-icons/bi';

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
        <Row />
        <Link to="/" className="sidebar-link" data-testid="dashboard-link">
          <Row className="mt-4">
            <Button className="list-group-item sidebar-btns" data-testid="dashboard-btn">
              <AiOutlineDashboard size={25} />
              {' '}
              Dashboard
            </Button>
          </Row>
        </Link>

        <Link to="/clinic" className="sidebar-link" data-testid="clinic-link">
          <Row>
            <Button className="list-group-item sidebar-btns">
              <BiClinic size={25} />
              {' '}
              Clinic
            </Button>
          </Row>
        </Link>

        <Link to="/appointments" className="sidebar-link" data-testid="appointments-link">
          <Row>
            <Button className="list-group-item sidebar-btns">
              <AiOutlineCalendar size={25} />
              {' '}
              Appointments
            </Button>
          </Row>
        </Link>

        <Link to="/patients" className="sidebar-link" data-testid="patients-link">
          <Row>
            <Button className="list-group-item sidebar-btns">
              <BsPeople size={25} />
              {' '}
              Patients
            </Button>
          </Row>
        </Link>

        <Link to="/finance" className="sidebar-link" data-testid="finance-link">
          <Row>
            <Button className="list-group-item sidebar-btns">
              <FaRegMoneyBillAlt size={25} />
              {' '}
              Finance
            </Button>
          </Row>
        </Link>

      </Col>
    </Container>
  );
}
