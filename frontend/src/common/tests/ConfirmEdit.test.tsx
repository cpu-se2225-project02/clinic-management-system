/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'urql';
import ConfirmEdit from '../ConfirmEdit';
import { mockClient } from '../../mocks/MockClient';

describe('Confirm Edit', () => {
    it('renders correctly', async () => {
        const { queryByTestId } = render(<Provider value={mockClient as any}>
          <ConfirmEdit
            onEditTrue={function (): void {
                throw new Error('Function not implemented.');
            }}
            onEditFalse={function (): void {
                throw new Error('Function not implemented.');
            }}
            editModal={false}
            setEditModal={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.');
            }}
          />

        </Provider>);
      // expect(queryByTestId('edit')).toBeTruthy();
    });
});
