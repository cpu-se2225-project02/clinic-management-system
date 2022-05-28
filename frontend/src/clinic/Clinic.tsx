/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  Container, Col, Row, Table, Button,
} from 'react-bootstrap';
import { IoPersonAddOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';
import { useQuery } from 'urql';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import AddDoctorForm from '../doctor/AddDoctorForm';
import { AllDoctorsDocument } from '../queries.generated';
import Footer from '../common/Footer';
import './Clinic.css';

function Clinic() {
  const [addDoctorBtn, setAddDoctorBtn] = useState(false);
  const [allDocs] = useQuery({
    query: AllDoctorsDocument,
  });

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>

      <Row>
        <Col xs={2} className="sidebar-box p-0 mb-5">
          <Sidebars />
        </Col>
        <Col>
          <Row className="mt-3 border-bottom">
            <Col xs={2}>
              <button type="button" className="btn btn-primary">
                <AiOutlineEdit size={20} />
                {' '}
                Update
              </button>
            </Col>
            <Col>
              <h4>About</h4>
              <div>
                <span><h5 className="span-style p-1">Clinic Name</h5></span>
                <div className="mb-3 deets">Cliniche</div>
              </div>
              <div>
                <span><h5 className="span-style p-1">Description</h5></span>
                <div className="mb-3 deets">A small local clinic in 5 years of service to the community.</div>
              </div>
              <div>
                <span><h5 className="span-style p-1">Services</h5></span>
                <ul className="mb-3 deets">
                  <li>Consultation</li>
                  <li>Minor illness treatment</li>
                  <li>Vaccination</li>

                </ul>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={2}>
              <button type="button" className="btn btn-primary" onClick={() => setAddDoctorBtn(true)}>
                <IoPersonAddOutline />
                {' '}
                Add Doctor
              </button>
              {addDoctorBtn && (
              <AddDoctorForm
                payForm={addDoctorBtn}
                addDoctorBtn={setAddDoctorBtn}
              />
              )}
            </Col>
            <Col>
              <h4>All Doctors</h4>
              <Table bordered responsive>
                <thead>
                  <tr>
                    <th>Name</th>
                    {/* <th>Actions</th> */}
                  </tr>
                </thead>
                <tbody>
                  {allDocs.data?.allDoctors?.map((doc) => (
                    <tr>
                      <td>
                        {doc?.doc_name}
                      </td>
                      <td>
                        <Button variant="warning">Patients</Button>
                        {' '}
                        <Button variant="warning">Appointments</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row className="res-row" />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Clinic;
