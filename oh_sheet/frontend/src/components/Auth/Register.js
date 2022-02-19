import React, { useState } from "react";
import "./Auth.css";
import { Button, Container, Form } from "react-bootstrap";

const Register = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    repeat_password: "",
    first_name: "",
    last_name: "",
    email: "",
  });

  const handleChange = (event) => {
    setUserInfo((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  function submitHandler(event) {
    event.preventDefault();
    console.log(userInfo);
  }
  return (
    <Container className="form-container">
      <Form
        className="login-form rounded p-2 auth-form"
        onSubmit={submitHandler}
      >
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            name="username"
            value={userInfo.username}
            type="text"
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>E-mail</Form.Label>
          <Form.Control
            name="email"
            value={userInfo.email}
            type="email"
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="E-mail"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="first_name"
            value={userInfo.first_name}
            type="text"
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="First Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="last_name"
            value={userInfo.last_name}
            type="text"
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="Last Name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            value={userInfo.password}
            type="password"
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name="repeat_password"
            value={userInfo.repeat_password}
            onChange={handleChange}
            className="form-input border-dark"
            placeholder="Repeat Password"
          />
        </Form.Group>
        <Button variant="dark" className="mt-2 login-btn" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
