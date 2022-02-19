import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="nav-container">
        <Navbar.Brand href="/" className="brand-text text-light">
          OhSheet
        </Navbar.Brand>
        <Nav className="nav-links justify-content-end">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
