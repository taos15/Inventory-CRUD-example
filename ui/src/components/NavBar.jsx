/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export default function AppNavbar() {
  const { isLoggedIn, setIsLoggedIn } = useSome();

  return (
    <Row>
      <Navbar className='  '>
        <Nav className='tw-flex tw-justify-start tw-gap-6'>
          <Link className='' to='/'>
            Home
          </Link>
          <Link className='' to='/inventory'>
            Inventory
          </Link>
          <Link className='' to='/inventory'>
            Login
          </Link>
          <Link className='' to='/createuser'>
            Create Account
          </Link>
          <Link className='' to='/inventory'>
            My Inventory
          </Link>
        </Nav>
      </Navbar>
    </Row>
  );
}
