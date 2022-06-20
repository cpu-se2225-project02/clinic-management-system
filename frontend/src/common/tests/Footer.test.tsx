/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-tag-spacing */
import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../Footer';

it('Renders correctly', () => {
    const { queryByTestId } = render(<Footer/>);

    expect(queryByTestId('footer')).toBeTruthy();
});
