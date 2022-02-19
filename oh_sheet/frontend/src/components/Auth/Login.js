import React, { useState } from "react";
import { connect } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { performLogin } from "../../redux/actions";
import "./Auth.css";
import "./Login.css";

const Login = (props) => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });
  console.log(props);

  const handleChange = (event) => {
    setCreds((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(creds);
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
    isAutheticated: state.auth.isAuthenticated,
  };
};

const mapDispatchToProps = {
  performLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
