import React from "react";
import { Navbar, Nav, Container, Row } from "react-bootstrap";

const BottomMenu = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="bottom-menu">
      <Container className="bottom-menu-container">
        <Nav className="bottom-menu-links justify-content-around">
          <Nav.Link href="/login">Login</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default BottomMenu;
