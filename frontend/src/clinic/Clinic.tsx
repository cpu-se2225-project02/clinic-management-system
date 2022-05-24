/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import {
  Container, Col, Row, Table,
} from 'react-bootstrap';
import { IoPersonAddOutline } from 'react-icons/io5';
import { useQuery } from 'urql';
import Header from '../common/Header';
import Sidebars from '../common/Sidebars';
import AddDoctorForm from '../doctor/AddDoctorForm';
import { AllDoctorsDocument } from '../queries.generated';
import Footer from '../common/Footer';

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
        <Col xs={2} className="sidebar-box p-0">
          <Sidebars />
        </Col>
        <Col>
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
              <h2>All Doctors</h2>
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
                      {/* <td>
                        <Button>Patients</Button>
                        {' '}
                        <Button>Appointments</Button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default Clinic;
