/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PatientList from '../PatientList';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

describe('All Patients', () => {
  it('get all patients', async () => {
    const { findByText } = render(
      <Router>
        <Routes>
          <Route path="*" element={<PatientList />} />
        </Routes>
      </Router>,
    );
    expect(await findByText('Something went wrong')).toBeInTheDocument();
  });

  // it('clicks patient name', async () => {
  //   const { queryByTestId } = render(
  //     <Router>
  //       <Routes>
  //         <Route path="*" element={<PatientList />} />
  //       </Routes>
  //     </Router>,
  //   );
  //   fireEvent.click(await queryByTestId('name-btns') as Element);
  //   expect(await queryByTestId('name-btns')).toBeCalled();
  // });
});
