import React from "react";
import { useState } from "react";
import { Dropdown, Row, Col, Container } from "react-bootstrap";
import { BiUserCircle } from "react-icons/bi";
import "./Header.css";

export default function Header() {
  const [doctorName, setDoctorName] = useState("");
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={9} className="banner-text">
            Cliniche
          </Col>

          <Col xs={2} className="doctor-btn">
            <Dropdown>
              <BiUserCircle size={30} />
              <Dropdown.Toggle variant="">Dr. Suelan</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col xs={1} className="banner-text"></Col>
        </Row>
      </Container>
    </>
  );
}
