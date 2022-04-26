import React from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Sidebars.css'

export default function Sidebars() {
  return (
    <>
      <Container fluid>
        <Col className="sidebar-col p-0">
          <Row>
            <Image
              className="border border-dark mt-1 clinic-img"
              fluid
              src="https://res.cloudinary.com/dmro06tbx/image/upload/v1650564665/techniche_tihcko.png"
            />
          </Row>

          <Row>
            <div className=' border border-dark clinic-name'>
              Clinic Name
            </div>
          </Row>

          <Link to="/" className='sidebar-link'>
          <Row>
            <Button active className='sidebar-btns' variant='secondary'>
                Dashboard
            </Button>
          </Row>
              </Link>

          <Link to="/clinic" className='sidebar-link'>
            <Row>
              <Button  className='sidebar-btns' variant='secondary'>
                  Clinic
              </Button>
            </Row>
          </Link>

          <Link to="/appointments" className="sidebar-link">
            <Row>
              <Button  className='sidebar-btns' variant='secondary'>
                  Appointments  
              </Button>
            </Row>
          </Link>

          <Link to="/patients" className='sidebar-link'>
            <Row>
              <Button  className='sidebar-btns' variant='secondary'>
                  Patients
              </Button>
            </Row>
          </Link>

          <Link to="/finance" className='sidebar-link'>
            <Row>
              <Button  className='sidebar-btns' variant='secondary'>
                  Finance
              </Button>
            </Row>
          </Link>
          
        </Col>
      </Container>
    </>
  );
}


