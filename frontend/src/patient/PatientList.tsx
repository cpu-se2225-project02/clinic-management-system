import React from "react";
import { Col, Row, Container, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../common/Header";
import Sidebars from "../common/Sidebars";
import { useState } from "react";
import "./PatientList.css";
import { BiSearchAlt2 } from "react-icons/bi";
import PatientForm from "./PatientForm";

function DimBackground() {}

export default function PatientList() {
  const [PostButton, setPostButton] = useState(false);
  const [totalPatients, setTotalPatients] = useState(0);

  return (
    <>
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <Col xs={2} className="sidebar-box p-0">
            <Sidebars />
          </Col>

          <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark">
            <Row>
              <Col xs={12}>
                <h5 className="h5">Patient List</h5>
              </Col>
            </Row>
            <Row>
              <Col xs={5} className="patient-total-label">
                Total of {totalPatients} patient(s)
              </Col>
              <Col xs={3}>
                <Form>
                  <Form.Group as={Row}>
                    <Form.Label column sm={2}>
                      <BiSearchAlt2 size={30} />
                    </Form.Label>
                    <Col sm={10}>
                      <Form.Control
                        type="text"
                        placeholder="Search"
                        className="search"
                      />
                    </Col>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={2}>
                <Dropdown>
                  <Dropdown.Toggle variant="">Filter Patient</Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>A-Z</Dropdown.Item>
                    <Dropdown.Item>Z-A</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col xs={2}>
                <Button
                  className="add-patient-btn btn-sm float-start"
                  onClick={() => setPostButton(true)}
                >
                  Add Patient
                </Button>
                {PostButton && <PatientForm postButton={setPostButton} />}
              </Col>
            </Row>
            <Row>
              <Col className="list border">
                {/* map of all patients from db goes here */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
