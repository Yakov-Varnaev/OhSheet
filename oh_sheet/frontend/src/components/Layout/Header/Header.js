import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";
import { headerTypes } from "../../../Enums/headerEnums";

const Header = (props) => {
  console.log("hi from header");
  const NAV_ANON_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  );
  const NAV_LOGIN_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  );
  const NAV_REGISTER_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/login">Login</Nav.Link>
    </Nav>
  );
  const NAV_USER_JSX = (
    <Nav className="nav-links justify-content-end">
      <Nav.Link href="/profile">Profile</Nav.Link>
    </Nav>
  );
  let header = NAV_ANON_JSX;
  if (props.headerType === headerTypes.LOGIN) {
    header = NAV_LOGIN_JSX;
  } else if (props.headerType === headerTypes.REGISTER) {
    header = NAV_REGISTER_JSX;
  }

  header = props.isAuthenticated ? NAV_USER_JSX : header;

  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Container className="nav-container">
        <Navbar.Brand href="/" className="brand-text text-light">
          OhSheet
        </Navbar.Brand>
        {header}
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  headerType: state.header.headerType,
});

export default connect(mapStateToProps, null)(Header);
