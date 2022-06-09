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

export function emailForm() {
    return (
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
        )
}