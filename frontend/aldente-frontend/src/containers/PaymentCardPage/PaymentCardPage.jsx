import React from "react";
import { Container } from "react-bootstrap";
import CardForm from "../../components/CardForm/CardForm";
import "./PaymentCardPage.css";

export default function PaymentCardPage() {
  return (
    <Container className="cardFormContainer">
      <CardForm />
    </Container>
  );
}
