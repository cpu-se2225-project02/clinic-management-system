/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';

import {
  Dropdown, Row, Col, Container, Button,
} from 'react-bootstrap';
import { RiAdminLine } from 'react-icons/ri';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  const [doctorName, setDoctorName] = useState('');
  return (
    <Container className="header">
      <Row>
        <Col xs={9} className="banner-text" data-testid="banner-text">
          Cliniche
        </Col>

        <Col xs={2} className="doctor-btn">

          <Dropdown data-testid="hdr-dropdown">
            <RiAdminLine size={30} />
            <Dropdown.Toggle variant="">Administrator</Dropdown.Toggle>
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
