import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPaymentCard } from "../../actions/payment-card";

export default function CardFrom() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = JSON.parse(localStorage.getItem("profile")).username;

  const [formIn, setFormIn] = useState({
    card_number: "",
    card_holder_name: "",
    valid_thru: "",
    csv: "",
    client_username: user,
  });

  const handleChange = (e) => {
    setFormIn({
      ...formIn,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Connecting to Your Bank...");
    dispatch(addPaymentCard(formIn, history));
  };

  return (
    <Container className="globalFormContainer productFormContainer">
      <form className="bodyForm">
        <div className="form-group ">
          <i className="fa fa-user formIcon"></i>
          <input
            card_number="card_number"
            name="card_number"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="Card Number"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="card_holder_name"
            name="card_holder_name"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="Card Holder Name"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="valid_thru"
            name="valid_thru"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="Valid Thru: mm/yyyy"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="password"
            name="csv"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="CSV"
          />
        </div>

        <Button
          type="submit"
          className="btn btn-primary submitButton"
          onClick={handleSubmit}
        >
          PAY
        </Button>
      </form>
    </Container>
  );
}
