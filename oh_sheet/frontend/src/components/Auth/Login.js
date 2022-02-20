import React, { useState } from "react";
import { useNavigate } from "react-router";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { performLogin } from "../../redux/authActions";
import { showLoginHeader } from "../../redux/Header/headerActions";
import "./Auth.css";
import "./Login.css";

const Login = (props) => {
  const navigate = useNavigate();
  if (props.isAuthenticated) {
    navigate("/");
  }
  props.showLoginHeader();

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    setCreds((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    props.performLogin(creds);
  }

  return (
    <Container className="form-container" onSubmit={submitHandler}>
      <Form className="auth-form rounded p-2">
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            onChange={handleChange}
            value={creds.username}
            className="form-input border-dark"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
            value={creds.password}
            className="form-input border-dark"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="dark" className="mt-2 login-btn" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = {
  performLogin,
  showLoginHeader,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
