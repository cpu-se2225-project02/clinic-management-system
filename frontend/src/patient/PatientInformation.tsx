/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';

export default function PatientInformation() {
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleInitial, setMiddileInitial] = useState('');
  const [sex, setSex] = useState('Female');
  const [suffix, setSuffix] = useState('');
  const [age, setAge] = useState(0);
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <Header />
      <Sidebars />
      <div>
        <Form.Group>
          <Form.Label>Name:</Form.Label>
          <Form.Control disabled>
            {suffix}
            {' '}
            {lastName}
            {' '}
            {firstName}
            {' '}
            {middleInitial}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Date of Birth:</Form.Label>
          <Form.Control disabled>
            {dob}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Age:</Form.Label>
          <Form.Control disabled>
            {age}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Sex:</Form.Label>
          <Form.Control disabled>
            {sex}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Address</Form.Label>
          <Form.Control disabled>
            {address}
          </Form.Control>
        </Form.Group>
      </div>
    </>
  );
}
