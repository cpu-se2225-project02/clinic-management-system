/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable func-names */
/* eslint-disable no-undef */
import React, { SetStateAction } from 'react';
import { Provider } from 'urql';
import { fireEvent, render } from '@testing-library/react';
import PatientForm from '../PatientForm';
import { mockClient } from '../../mocks/MockClient';

it('triggers a mutation for inserting a patient', async () => {
  const { queryByTestId } = render(
    <Provider value={mockClient as any}>
      <PatientForm
        postButton={function (value: SetStateAction<boolean>): void {}}
        payForm
      />
    </Provider>,
  );
  const variables = {
    name: 'Jenny Rose',
  };

  fireEvent.click(queryByTestId('submit-btn') as Element);
  expect(mockClient.executeMutation).toBeCalledTimes(1);
});
