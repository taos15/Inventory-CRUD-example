/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useSome } from '../utilities/MainContextProvider';

export default function AppNavbar() {
  const { isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser } = useSome();

  return (
    <Row>
      <Col className=''>
        <Navbar className=' '>
          <Nav className=''>
            <Link className='' to='/'>
              Home
            </Link>

            <Link className='' to='/inventory'>
              Inventory
            </Link>

            {!isLoggedIn ? (
              <Link className='' to='/login'>
                Login
              </Link>
            ) : (
              <Link
                onClick={() => {
                  setIsLoggedIn(false);
                  setCurrentUser('Visitor');
                }}
                className=''
                to='/login'
              >
                Logout
              </Link>
            )}

            {!isLoggedIn && (
              <Link className='' to='/createuser'>
                Create Account
              </Link>
            )}

            {isLoggedIn && (
              <Link className='' to='/myinventory'>
                My Inventory
              </Link>
            )}
            {isLoggedIn && (
              <Link className='' to='/createitem'>
                Add Item
              </Link>
            )}
          </Nav>
        </Navbar>
      </Col>
      <Col>
        <div>{`Current user:  ${currentUser.username}`}</div>
      </Col>
    </Row>
  );
}
