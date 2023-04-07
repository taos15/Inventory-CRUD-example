/* eslint-disable import/no-extraneous-dependencies */
import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

export default function AppNavbar() {
  const displayAccountInfo = () =>
    true ? (
      <div className='navbar-text'>Logged in as: ?</div>
    ) : (
      <div className='navbar-text'>Please login</div>
    );

  return (
    <Navbar className=' tw-bg-slate-300'>
      <Nav className='tw-flex tw-justify-start tw-gap-6'>
        <Link className='tw-block' to='/'>
          Home
        </Link>
        <Link className='tw-block' to='/inventory'>
          Inventory
        </Link>
        <NavDropdown title='Dropdown' id='nav-dropdown'>
          <NavDropdown.Item eventKey='4.1'>Action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey='4.3'>
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey='4.4'>Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
