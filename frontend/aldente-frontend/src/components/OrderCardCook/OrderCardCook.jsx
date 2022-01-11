import React from "react";
import { Card, Form } from "react-bootstrap";
import "./OrderCardCook.css";
import { useDispatch } from "react-redux";
import { updateOrder } from "../../actions/order";

export default function OrderCardCook(props) {
  const order = props.order;
  let date = order.date.split(":")[0].split("-");
  date[2] = date[2].substring(0, 2);
  date = date.reverse().join("-");
  const doneFlag = order.done;

  const dispatch = useDispatch();

  const handleDone = () => {
    dispatch(updateOrder(order._id, { done: true }));
    window.location.reload(false);
  };

  return !doneFlag ? (
    <Card className="globalCard">
      <Card.Body className="globalCardBody">
        <Form.Check
          type="checkbox"
          onChange={handleDone}
          label="Mark It Done!"
        />
        <Card.Title className="globalCardTitle" id="longerTitle">
          Order Date:{date}
        </Card.Title>
        {order.orderitems.map((orderitem) => (
          <Card.Text className="globalCardHeader">{orderitem.name} </Card.Text>
        ))}
        <Card.Text className="globalCardHeader">{order.price} $ </Card.Text>
      </Card.Body>
    </Card>
  ) : (
    <></>
  );
}
