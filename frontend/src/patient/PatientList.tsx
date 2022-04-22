import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import './PatientList.css';

export default function PatientList() {
  return (
    <> 
    <Container fluid>
      <Row>
       <Header/>
      </Row>
      <Row>
        <Col xs={2} className='sidebar-box p-0' >
          <Sidebars/>
        </Col>

        <Col xs={10} className='patient-list-box p-0 mt-2' >
          <h5 className='h5' >Patient List</h5>
        </Col>  
      </Row>
    </Container>
    </>
  )
}