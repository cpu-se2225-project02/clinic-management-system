/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import {
  Dropdown, Row, Col, Container,
} from 'react-bootstrap';
import { BiUserCircle } from 'react-icons/bi';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [doctorName, setDoctorName] = useState('');
  return (
    <Container fluid>
      <Row>
        <Col xs={9} className="banner-text" data-testid="banner-text">
          Cliniche
        </Col>

        <Col xs={2} className="doctor-btn">

          <Dropdown data-testid="hdr-dropdown">
            <BiUserCircle size={30} />
            <Dropdown.Toggle variant="">Dr. Suelan</Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to="/login" data-testid="logout-btn" className="sidebar-link">Logout</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col xs={1} className="banner-text" />
      </Row>
    </Container>
  );
}
