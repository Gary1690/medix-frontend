import React from "react";
import {Navbar, Nav, NavDropdown,Form,FormControl,Button} from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Medix</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Dashboard</Nav.Link>
          <Nav.Link href="#link">Patients</Nav.Link>
          <Nav.Link href="#link">Appoinment</Nav.Link>
        </Nav>
        <div className="mr-auto">
          <Nav.Link href="#link">Logout</Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation
