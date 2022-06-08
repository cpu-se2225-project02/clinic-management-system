/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import {
  Col, Row, Container, Form, Dropdown, Button,
} from 'react-bootstrap';
import { BiSearchAlt2 } from 'react-icons/bi';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';

export default function SignUpPage() {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Container fluid>
      <Container className="Login">
        <h3>Sign In</h3>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>First Name</Form.Label>
            <Col sm={20}>
              <Form.Control
                type="text"
                placeholder="Enter first Name"
                className="fName"
                onChange={(e) => setFName(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Last Name</Form.Label>
            <Col sm={20}>
              <Form.Control
                type="text"
                placeholder="Enter last name"
                className="lName"
                onChange={(e) => setLName(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Email Address</Form.Label>
            <Col sm={20}>
              <Form.Control
                type="text"
                placeholder="Enter email address"
                className="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        <Form>
          <Form.Group as={Row}>
            <Form.Label>Password</Form.Label>
            <Col sm={20}>
              <Form.Control
                type="password"
                placeholder="Enter password"
                className="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Col>
          </Form.Group>
        </Form>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </Container>
    </Container>
  );
}
