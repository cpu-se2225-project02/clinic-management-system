import React, { ReactElement } from 'react'
import { Col, Row, Container, Form, Dropdown, Button } from "react-bootstrap";
import Header from "../common/Header";
import Sidebars from "../common/Sidebars";
import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

export default function FinancePage() {
  return (
    <Container fluid>
      <Row>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <Header />

      </Row>
      <Row>
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>

        <Col xs={10} className="patient-list-box p-0 mt-2 border border-dark">
          <div className="card-body"> Finance Overview
            <div className="card border-dark mb-3">
              <div className="card-body text-dark">
                <span className="material-icons">payment</span>
                <h5 className="card-title">PAYMENT</h5>
                <p className="card-text">00.00 PHP</p>
              </div>
              <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary">View Payment</button>
                <button type="button" className="btn btn-primary">Add Payment</button>
              </div>
            </div>



            <div className="card-body">
              <div className="card border-dark mb-3">
                <div className="card-body text-dark"> <span className="material-icons">payment</span>
                  <h5 className="card-title">PATIENT ACCOUNT</h5>

                </div>

                <button type="button" className="btn btn-primary">View Patient Accounts</button>
              </div>

            </div>
          </div>


        </Col>
      </Row>
    </Container>



  );
}