/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { IoPersonAddOutline } from 'react-icons/io5';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import AddDoctorForm from '../doctor/AddDoctorForm';

function Clinic() {
  const [addDoctorBtn, setAddDoctorBtn] = useState(false);

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
          <button type="button" className="btn btn-primary" onClick={() => setAddDoctorBtn(true)}>
            <IoPersonAddOutline />
            Add Doctor
          </button>
          {addDoctorBtn && <AddDoctorForm payForm={addDoctorBtn} addDoctorBtn={setAddDoctorBtn} />}

        </Col>
      </Row>
    </Container>
  );
}

export default Clinic;
