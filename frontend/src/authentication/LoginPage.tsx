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

import './LoginPage.css';

export default function LoginPage() {
  return (
    <Container fluid>
      <Container className="Login">
        <h3>Sign In</h3>

        <Form>
          <Form.Group as={Row}>
            <Form.Label>Email Address</Form.Label>
            <Col sm={20}>
              <Form.Control
                type="text"
                placeholder="Enter email address"
                className="email"
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
              />
            </Col>
          </Form.Group>
        </Form>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot
          {' '}
          <a href="foo">password?</a>
        </p>
      </Container>
    </Container>
  );
}
