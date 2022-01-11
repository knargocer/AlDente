import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./LoginForm.css";
import { login } from "../../actions/auth";
export default function LoginForm() {
  const [formIn, setFormIn] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formIn, history));
  };

  const handleChange = (e) => {
    setFormIn({ ...formIn, [e.target.name]: e.target.value });
  };

  return (
    <Container className="loginFormContainer">
      <Container className="loginFormCol ">
        <Row className="loginFormRow">
          <form className="loginForm">
            <div className="form-group">
              <i className="fa fa-user formIcon"></i>
              <input
                type="username"
                name="username"
                className="form-control"
                id="usernameEntry"
                placeholder="Username"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <i className="fa fa-lock formIcon"></i>
              <input
                type="password"
                name="password"
                className="form-control"
                id="passwordEntry"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary loginButton"
            >
              Login!
            </button>
          </form>
        </Row>
        <Row>
          <Col className="formText">
            <p>
              Don't have an account?{" "}
              <a className="signUpHref" href="signup">
                SignUp!
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
