import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar , Nav } from 'react-bootstrap';
const PublicNav =()=>{
    return(
        <Navbar bg="light" expand="lg">
      <Navbar.Brand href="https://github.com/">Rock Paper Scissors</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="https://github.com/">Home</Nav.Link>
          <Nav.Link href="https://github.com/">Link</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    );
};

export default PublicNav;