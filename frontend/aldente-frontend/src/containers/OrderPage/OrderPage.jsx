import React, { useEffect } from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import "./OrderPage.css";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrders } from "../../actions/order";
import { Checkmark } from "react-checkmark";

export default function OrderPage() {
  let username = JSON.parse(localStorage.getItem("profile")).username;
  const dispatch = useDispatch();
  const history = useHistory();

  const ordersArray = useSelector((state) => state.orderReducer.orders);
  let ordersByTheUser = ordersArray
    ? ordersArray.filter((c) => (c ? c.client_username === username : false))
    : [];
  let orderByTheUser = ordersByTheUser.sort((a, b) => b.date - a.date)[
    ordersByTheUser.length - 1
  ];

  const handlePayByCard = () => {
    history.push("/card");
  };

  const handleClose = () => {
    history.push("/home");
  };
  useEffect(() => {
    dispatch(getOrders(history));
  }, [dispatch, history]);

  return (
    <Container className="orderContainer">
      <Row>
        <Checkmark />
      </Row>
      <Row className="orderSuccessfullBody">
        <Form.Label className="successMessage">
          Dear {username} Your Order Has Been Placed!
        </Form.Label>
        <Form.Label className="overallCostLabel">
          {" "}
          To Be Paied: {orderByTheUser ? orderByTheUser.price : 0}$
        </Form.Label>
        <Button
          className="editButton"
          id="longerButton"
          onClick={handlePayByCard}
        >
          Pay By card
        </Button>
      </Row>
      <Button
        className="editButton"
        id="changedColorsButton"
        onClick={handleClose}
      >
        Close
      </Button>
    </Container>
  );
}
