import React, { useState } from "react";
import "./Appointment.css";
import {FaCalendarAlt} from "react-icons/fa"
import { Container, Col, Row } from 'react-bootstrap';
import AppointmentViewButtons from "./AppointmentViewButtons"
import Header from "../common/Header";
import Sidebars from "../common/Sidebars";
import { Scheduler } from "@aldabil/react-scheduler";

function Appointment() {
  const types = ['calendar', 'list']
    const [active, setActive] = useState(types[0])
  const handleChange = (event: React.MouseEvent<HTMLElement>, type: string) => {
    if (active !== type) {
    setActive(type)} 
  }
  
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

          <Col xs={10} className="appointment-box p-0 mt-2 border border-dark">
            <Row>
              <Col>
                <FaCalendarAlt className="appointment-calendar-icon"/>
                Appointments
              </Col>
              <Col>
                <AppointmentViewButtons type={active} onClick={handleChange}/>
              </Col>
            </Row>
            <Row>
              <Col>
              {active === "calendar" ? (
                    <Scheduler
                    view="month"
                    events={[
                      {
                        event_id: 1,
                        title: "Event 1",
                        start: new Date("2021/5/2 09:30"),
                        end: new Date("2021/5/2 10:30"),
                      },
                      {
                        event_id: 2,
                        title: "Event 2",
                        start: new Date("2021/5/4 10:00"),
                        end: new Date("2021/5/4 11:00"),
                      },
                    ]}
                  />
                ) : (
                  <div>Listttttttttt</div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Appointment;
