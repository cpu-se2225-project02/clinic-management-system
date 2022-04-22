import React, { useState } from "react";
import "./Appointment.css";
import {FaCalendarAlt} from "react-icons/fa"
import AppointmentViewButtons from "./AppointmentViewButtons"
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
      <div className="appointment">
        <div className="appointment-container container">
          <div className="appointment-label">
            <FaCalendarAlt className="appointment-calendar-icon"/>
            Appointments
            <div className="appointment-view-btn-container">
            <AppointmentViewButtons type={active} onClick={handleChange}/>
            </div>
          </div>
          <div className={active === "calendar" ? "appointment-calendar-container" : "appointment-list-container"}>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
