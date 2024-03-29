/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import React from 'react';
// import "AppointmentViewButtons.css"
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

interface AppointmentViewButtonsProps {
  className?: string,
  type: string,
  onClick: ((event: React.MouseEvent<HTMLElement, MouseEvent>, value: any) => void) | undefined
}

function AppointmentViewButtons(props: AppointmentViewButtonsProps) {
  return (
    <ToggleButtonGroup
      color="primary"
      value={props.type}
      exclusive
      onChange={props.onClick}
      className={props.className}
    >
      <ToggleButton value="calendar">Calendar View</ToggleButton>
      <ToggleButton value="list">List View</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default AppointmentViewButtons;
