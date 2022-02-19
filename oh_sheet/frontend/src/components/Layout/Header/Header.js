import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

const Header = (props) => {
  console.log("hi from header");

  const NAV_ANON_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  );
  const NAV_USER_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
  );

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="nav-container">
        <Navbar.Brand href="/" className="brand-text text-light">
          OhSheet
        </Navbar.Brand>
        {props.isAuthenticated ? NAV_USER_JSX : NAV_ANON_JSX}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Header);
