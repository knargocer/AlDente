import React from "react";
import { Card } from "react-bootstrap";
import "./PaymentCardCard.css";

export default function PaymentCardCard(props) {
  const card = props.card;
  console.log(card);
  return (
    <Card className="globalCard">
      <Card.Body className="globalCardBody">
        <Card.Text className="globalWhiteHeader">
          {card.card_holder_name}
        </Card.Text>
        <Card.Title className="globalCardTitle" id="longerTitle">
          **** **** ****{" "}
          {card.card_number
            .toString()
            .substr(card.card_number.toString().length - 4)}
        </Card.Title>
        <Card.Text className="globalHeader">{card.valid_thru}</Card.Text>
      </Card.Body>
    </Card>
  );
}
