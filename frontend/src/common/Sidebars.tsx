import React from "react";
import { Container, Col, Row, Button, Image } from "react-bootstrap";
import "./Sidebars.css";

export default function Sidebars() {
  return (
    <>
      <Col className="sidebar-col p-0">
        <Row>
          <Image
            className="border border-dark mt-1 clinic-img"
            fluid
            src="https://res.cloudinary.com/dmro06tbx/image/upload/v1650564665/techniche_tihcko.png"
          />
        </Row>
        <Row>
          <div className=" border border-dark clinic-name">Clinic Name</div>
        </Row>
        <Row>
          <Button active className="sidebar-btns" variant="secondary">
            Dashboard
          </Button>
        </Row>
        <Row>
          <Button className="sidebar-btns" variant="secondary">
            Clinic
          </Button>
        </Row>
        <Row>
          <Button className="sidebar-btns" variant="secondary">
            Appointments
          </Button>
        </Row>
        <Row>
          <Button className="sidebar-btns" variant="secondary">
            Patients
          </Button>
        </Row>
        <Row>
          <Button className="sidebar-btns" variant="secondary">
            Finance
          </Button>
        </Row>
      </Col>
    </>
  );
}
