import React from "react";
import { Container, Row, Col, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../common/Header";
import Sidebars from "../common/Sidebars";
import { useState } from "react";
import "./PatientList.css";

export default function PatientRecord() {
  const [patientName, setPatientName] = useState("");
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
                <h5 className="h5">Jenny Rose Suelan</h5>
              </Col>
            </Row>

            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Patient Information
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Prescriptions
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Medical History
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Account
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Medical Notes
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="list border d-grid gap-2">
                <Button variant="primary" className="patient-btns">
                  Appointment
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
