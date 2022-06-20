/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable no-useless-return */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { Provider } from 'urql';
import ConfirmDelete, { Props } from '../ConfirmDelete';
import { mockClient } from '../../mocks/MockClient';

describe('ConfirmDelete', () => {
    it('renders correctly', async () => {
      const { queryByTestId } = render(<Provider value={mockClient as any}>
        <ConfirmDelete
          onDeleteTrue={function (): void {
               throw new Error('Function not implemented.');
           }}
          onDeleteFalse={function (): void {
               throw new Error('Function not implemented.');
           }}
          deleteModal={false}
          deleteModalBtn={function (value: React.SetStateAction<boolean>): void {
               throw new Error('Function not implemented.');
           }}
        />
      
      </Provider>);
    // expect(queryByTestId('delete')).toBeTruthy();
    });
  });

// describe('Confirm Delete Button', () => {
//     const onDeleteTrue = jest.fn;
//     it('deletes', async () => {
//         const { queryByTestId } = render(<ConfirmDelete
//           onDeleteTrue={function (): void {
//             throw new Error('Function not implemented.');
//         }}
//           onDeleteFalse={function (): void {
//             throw new Error('Function not implemented.');
//         }}
//           deleteModal={false}
//           deleteModalBtn={function (value: React.SetStateAction<boolean>): void {
//             throw new Error('Function not implemented.');
//         }}
//         />);
//         const deleteBtn = await queryByTestId('delete-btn');

//         expect(deleteBtn).toBeTruthy();
//     });
    
//     it('cancels', async () => {
//         const onDeleteFalse = jest.fn;
//         const { queryByTestId } = render(<ConfirmDelete
//           onDeleteTrue={function (): void {
//             throw new Error('Function not implemented.');
//         }}
//           onDeleteFalse={function (): void {
//             throw new Error('Function not implemented.');
//         }}
//           deleteModal={false}
//           deleteModalBtn={function (value: React.SetStateAction<boolean>): void {
//             throw new Error('Function not implemented.');
//         }}
//         />);
//         const cancelBtn = await queryByTestId('cancel-btn');

//         expect(onDeleteFalse).toBeEnabled();
//     });
// });
