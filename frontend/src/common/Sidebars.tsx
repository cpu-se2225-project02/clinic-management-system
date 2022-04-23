import React from 'react';
import { Container, Col, Row, Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Sidebars.css'

export default function Sidebars() {
  return (
    <>
      <Container fluid>
        <Col xs={1}>
          <Row >
            <Image  className='border border-dark mt-1' fluid src='https://res.cloudinary.com/dmro06tbx/image/upload/v1650564665/techniche_tihcko.png'/>
          </Row>

          <Row>
            <div className=' border border-dark clinic-name'>
              Clinic Name
            </div>
          </Row>

          <Row>
            <Button active className='sidebar-btns' variant='secondary'>
              <Link to="/" className='nav-link'>
                Dashboard
              </Link>
            </Button>
          </Row>

          <Row>
            <Button  className='sidebar-btns' variant='secondary'>
              <Link to="/clinic" className='nav-link'>
                Clinic
              </Link>
            </Button>
          </Row>

          <Row>
            <Button  className='sidebar-btns' variant='secondary'>
              <Link to="/appointments" className="nav-link">
                Appointments
              </Link>
            </Button>
          </Row>

          <Row>
            <Button  className='sidebar-btns' variant='secondary'>
              <Link to="/patients" className='nav-link'>
                Patients
              </Link>
            </Button>
          </Row>

          <Row>
            <Button  className='sidebar-btns' variant='secondary'>
              <Link to="/finance" className='nav-link'>
                Finance
              </Link>
            </Button>
          </Row>
          
        </Col>
      </Container>
    </>
  )
}