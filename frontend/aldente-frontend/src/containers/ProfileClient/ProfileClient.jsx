import React, { useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./ProfileClient.css";
import Client from "./images/Client.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import OrderCard from "../../components/OrderCard/OrderCard";
import PaymentCardCard from "../../components/PaymentCardCard/PaymentCardCard";
import { getOrders } from "../../actions/order";
import { getPaymentCards } from "../../actions/payment-card";

export default function ProfileClient() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const history = useHistory();

  const ordersArray = useSelector((state) => state.orderReducer.orders);
  const cards = useSelector((state) => state.paymentCardReducer.cards);

  const ordersByTheUser = ordersArray
    ? ordersArray.filter((c) =>
        c ? c.client_username === user.username : false
      )
    : [];

  const cardsOfTheUser = cards
    ? cards.filter((c) => (c ? c.client_username === user.username : false))
    : [];

  useEffect(() => {
    dispatch(getOrders(history));
    dispatch(getPaymentCards(history));
  }, [dispatch, history]);

  return (
    <Container className="profilePageContainer">
      <Container className="profileDetails">
        <Card className="profileCard">
          <Card.Img className="profileImage" variant="top" src={Client} />
          <Card.Body>
            <Card.Title>{user.username}</Card.Title>
            <Card.Text></Card.Text>
            <Button className="editButton" variant="primary">
              Edit
            </Button>
          </Card.Body>
        </Card>
      </Container>
      <Container className="profileActivity">
        <Form.Label className="profileLabel">Order History</Form.Label>
        <Container className="allCardsContainer">
          {ordersByTheUser.length > 0 ? (
            ordersByTheUser
              .reverse()
              .map((order) => <OrderCard order={order} />)
          ) : (
            <p className="notFoundMessage">There Are No Orders Placed Yet :(</p>
          )}
        </Container>
        <Form.Label className="profileLabel">Cards</Form.Label>
        <Container className="allCardsContainer">
          {cardsOfTheUser.length > 0 ? (
            cardsOfTheUser
              .reverse()
              .map((card) => <PaymentCardCard card={card} />)
          ) : (
            <p className="notFoundMessage">There Are No Cards Added Yet :(</p>
          )}
        </Container>
      </Container>
    </Container>
  );
}
