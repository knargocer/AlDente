import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.css";

export default function Login() {
  return (
    <Container className="loginContainer">
      <LoginForm />
    </Container>
  );
}
