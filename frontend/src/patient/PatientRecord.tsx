import React from "react";
import { Container, Row, Col, Form, Dropdown } from "react-bootstrap";
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
