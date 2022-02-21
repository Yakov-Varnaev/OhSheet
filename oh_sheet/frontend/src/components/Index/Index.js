import "./Index.css";
import React from "react";
import { connect } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";

const Index = ({ isAuthenticated }) => {
  return (
    <Container className="index-container">
      <h1 className="index-text">OhSheet</h1>
      {isAuthenticated ? <span>Authenticated</span> : <span>Anonym</span>}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(Index);
