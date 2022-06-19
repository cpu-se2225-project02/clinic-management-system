/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React, { SetStateAction } from 'react';
import { Provider } from 'urql';
import { fireEvent, render, screen } from '@testing-library/react';
import AddDoctorForm from './AddDoctorForm';
import { mockClient } from '../mocks/MockClient';

describe('Add Doctor Form', () => {

    it('should type input', async () => {
        render(
            <AddDoctorForm
              addDoctorBtn={function (value: SetStateAction<boolean>): void {}}
              payForm
            />
        );
        const inputElement = screen.getByPlaceholderText(/Name/i);
      
        fireEvent.change(inputElement, { target: {value: "Dr. Kevin" } });
        expect(inputElement.value).toBe("Dr. Kevin");
      });
    
    it('adding a doctor', async () => {
      const { queryByTestId } = render(
        <Provider value={mockClient as any}>
          <AddDoctorForm
            addDoctorBtn={function (value: SetStateAction<boolean>): void {}}
            payForm
          />
        </Provider>,
      );
    
      fireEvent.click(queryByTestId('submit-btn') as Element);
      expect(mockClient.executeMutation).toBeCalledTimes(1);
    });
});


