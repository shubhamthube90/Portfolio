import React from "react";
import { Link } from "react-router-dom";
import './Nav.css';
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComp() {
  return (
    <Navbar expand="lg" className="navbar-custom sticky-top bg-dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">⚙ Shubham</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/">HOME</Nav.Link>
            <Nav.Link as={Link} to="/qualification/education">QUALIFICATION</Nav.Link>
            <Nav.Link as={Link} to="/skills">SKILLS</Nav.Link>
            <Nav.Link as={Link} to="/contact">CONTACT</Nav.Link>
            <Nav.Link as={Link} to="/signup">SIGNUP</Nav.Link>
            <Nav.Link as={Link} to="/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
