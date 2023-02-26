//import React, { Component } from 'react'
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function MyNavbar() {
  
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand><Link to="/" className='linkTagMain'>My Navbar</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/Registration" className='linkTag'>Registration</Link></Nav.Link>
          <Nav.Link><Link to="/MedicalHistoryForm" className='linkTag'>Add Medical History</Link></Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
