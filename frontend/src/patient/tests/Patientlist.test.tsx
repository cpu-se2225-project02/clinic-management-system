/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider, createClient } from 'urql';
// import { act } from 'react-dom/test-utils';
import PatientList from '../PatientList';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';

const client = createClient({
  url: 'http://localhost:8001/graphql',
});

describe('All Patients', () => {
  it('get all patients', async () => {
    const { findByText } = render(
      <Provider value={client}>
        <Router>
          <Routes>
            <Route path="*" element={<PatientList />} />
          </Routes>
        </Router>
        ,
      </Provider>,
    );
    expect(await findByText('Something went wrong')).toBeInTheDocument();
  });

  // it('clicks patient name', async () => {
  //   act(() => {
  //     const { queryByTestId } = render(
  //       <Provider value={client}>
  //         <Router>
  //           <Routes>
  //             <Route path="*" element={<PatientList />} />
  //           </Routes>
  //         </Router>
  //         ,
  //       </Provider>,
  //     );
  //     const patientBtn = queryByTestId('name-btns') as Element;
  //     fireEvent.click(patientBtn);
  //     expect(patientBtn).toBeCalled();
  //   });
  // });
});
