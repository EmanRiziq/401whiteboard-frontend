import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import App from '../App';
import Auth from '../src/components/Auth'
import signup from '../src/components/Signup'

  test( 'renders the signup ', () => {
    render( <Auth /> );
    const person = screen.getByTestId( 'Auth' );
    expect( signup ).toBeInTheDocument();
} );