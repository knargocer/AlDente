import React from "react";
import { Card } from "react-bootstrap";
import "./OrderCard.css";

export default function OrderCard(props) {
  const order = props.order;
  let date = order.date.split(":")[0].split("-");
  date[2] = date[2].substring(0, 2);
  date = date.reverse().join("-");

  return (
    <Card className="globalCard">
      <Card.Body className="globalCardBody">
        <Card.Title className="globalCardTitle" id="longerTitle">
          Order Date:{date}
        </Card.Title>
        {order.done ? (
          <Card.Text className="globalWhiteHeader">Done</Card.Text>
        ) : (
          <Card.Text className="globalWhiteHeader">On Progress</Card.Text>
        )}
        <Card.Text className="globalWhiteHeader">
          From {order.cook_username}
        </Card.Text>
        {order.orderitems.map((orderitem) => (
          <Card.Text className="globalCardHeader">{orderitem.name} </Card.Text>
        ))}
        <Card.Text className="globalCardHeader">{order.price} $ </Card.Text>
      </Card.Body>
    </Card>
  );
}
