import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import "./SignUpForm.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../../actions/auth";

export default function SignUpForm() {
  const [formIn, setFormIn] = useState({
    name: "",
    surname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    telephone: "",
    role: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIn.password !== formIn.confirmPassword) {
      alert("passwords should match");
      return;
    }
    dispatch(signUp(formIn, history));
  };

  const handleChange = (e) => {
    setFormIn({ ...formIn, [e.target.name]: e.target.value });
  };

  return (
    <Container className="globalFormContainer">
      <form className="bodyForm">
        <div className="form-group ">
          <i className="fa fa-user formIcon"></i>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="surname"
            name="surname"
            onChange={handleChange}
            className="form-control"
            id="surnameEntry"
            placeholder="Surname"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="username"
            name="username"
            onChange={handleChange}
            className="form-control"
            id="usernameEntry"
            placeholder="Username"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-envelope formIcon"></i>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="form-control"
            id="emailEntry"
            placeholder="Email"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-lock formIcon"></i>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="form-control"
            id="passwordEntry"
            placeholder="Password"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-lock formIcon"></i>
          <input
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            className="form-control"
            id="passwordSecondEntry"
            placeholder="Password Again"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-address-card formIcon"></i>
          <input
            type="address"
            name="address"
            onChange={handleChange}
            className="form-control"
            id="addressEntry"
            placeholder="Address"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-phone formIcon"></i>
          <input
            type="telephone"
            name="telephone"
            onChange={handleChange}
            className="form-control"
            id="telephoneEntry"
            placeholder="Telephone"
          />
        </div>
        <Row className="signupCheckBoxes">
          <div className="form-check">
            <input
              className="form-check-input"
              onChange={handleChange}
              name="role"
              type="radio"
              id="cookUser"
              value="COOK"
            />
            <label className="form-check-label">Cook</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              onChange={handleChange}
              name="role"
              type="radio"
              id="clientUser"
              value="CLIENT"
            />
            <label className="form-check-label">Client</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              onChange={handleChange}
              name="role"
              type="radio"
              id="bothUser"
              value="BOTH"
            />
            <label className="form-check-label">Both</label>
          </div>
        </Row>
        <button
          type="submit"
          className="btn btn-primary submitButton"
          onClick={handleSubmit}
        >
          Sign Up!
        </button>
      </form>
    </Container>
  );
}
