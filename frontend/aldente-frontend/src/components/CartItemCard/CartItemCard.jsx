import React from "react";
import { Card } from "react-bootstrap";
import "./CartItemCard.css";
import { BsFillCartDashFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteOrderItem } from "../../actions/order-item";

export default function CartItemCard(props) {
  const dispatch = useDispatch();

  const cartItem = props.cartItem;
  const handleRemoveFromCart = (e) => {
    const id = cartItem._id;
    dispatch(deleteOrderItem(id));
  };
  return (
    <Card className="globalCard">
      <Card.Body className="globalCardBody">
        <div className="cartCardHeader">
          <Card.Title className="globalCardTitle">{cartItem.name}</Card.Title>
          <BsFillCartDashFill
            className="removeCartIcon"
            onClick={handleRemoveFromCart}
          />
        </div>
        <Card.Text className="globalCardHeader">{cartItem.price} $ </Card.Text>
      </Card.Body>
    </Card>
  );
}
