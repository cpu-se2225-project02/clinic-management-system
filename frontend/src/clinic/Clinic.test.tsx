import React from 'react';
import { render, fireEvent, screen} from '@testing-library/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Clinic from './Clinic';

describe('Finance Page', () => {
    
    it('renders Clinic', async () => {
        render(
         <Router>
           <Routes>
             <Route path="*" element={<Clinic/>}/>
           </Routes>
         </Router>
       );
     });
    
     it('displays all Doctors', async () => {
        const { queryByTestId } = render(
                <Router>
                  <Routes>
                    <Route path="*" element={<Clinic/>}/>
                  </Routes>
                </Router>
              );
    
        expect(queryByTestId('allDoctors')).toBeCalled;
    });
});

