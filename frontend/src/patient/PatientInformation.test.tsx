import React from "react";
import { fireEvent, render, screen } from '@testing-library/react';
import PatientInformation from "./PatientInformation";

it ('Renders correctly', () => {
    const{ queryByTestId } = render(<PatientInformation pId={1}/>)

    expect(queryByTestId('PatientInfo')).toBeTruthy();
   
});

describe('Input Value', () => {
    it ('Delete Patient info', () => {
        const patientDelete = jest.fn();

        render(<patientDeletion onClick={patientDelete}>Click Me</patientDeletion>)
        fireEvent.click(screen.getByTestId('PatientInfo'))
        expect(patientDelete).toHaveBeenCalledTimes(1)

    }
    )

    
})
