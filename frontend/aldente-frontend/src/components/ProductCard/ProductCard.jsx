import React from "react";
import "./ProductCard.css";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderItem } from "../../actions/order-item";
import {
  BsFillBookmarkCheckFill,
  BsFillBookmarkXFill,
  BsFillCartPlusFill,
} from "react-icons/bs";

export default function ProductCard(props) {
  const username = JSON.parse(localStorage.getItem("profile"))
    ? JSON.parse(localStorage.getItem("profile")).username
    : "";
  const product = props.product;
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddToCart = () => {
    const data = {
      name: product.name,
      amount: 1,
      price: product.price,
      client_username: username,
      cook_username: product.cook_username,
    };
    dispatch(addOrderItem(data, history));
  };

  if (product) {
    return (
      <Card className="globalCard">
        <BsFillCartPlusFill
          className="addToCartIcon"
          onClick={handleAddToCart}
        />
        <Card.Body className="globalCardBody">
          <div className="headerCard">
            <Card.Title className="globalCardTitle">{product.name}</Card.Title>
            <Card.Text className="globalCardText globalCardEmphasis">
              by {product.cook_username}
            </Card.Text>
          </div>
          {product.avaliability === "AVALIABLE" ? (
            <div className="globalWhiteHeader">
              <BsFillBookmarkCheckFill className="avaliablityIcon" />
              <h6>Avaliable</h6>
            </div>
          ) : (
            <div>
              <BsFillBookmarkXFill className="avaliablityIcon" />
              <h6>Not Avaliable</h6>
            </div>
          )}
          <Card.Text className="globalCardHeader">Ingredients</Card.Text>
          <div className="ingredientNames">
            {product.ingredients.map((ing) => (
              <Card.Text className="globalCardText">{ing.name}</Card.Text>
            ))}
          </div>
          <Card.Text className="globalCardHeader">Couisine</Card.Text>
          <Card.Text className="globalCardText">{product.cuisine}</Card.Text>
          <Card.Text className="globalCardHeader">{product.price} $ </Card.Text>
        </Card.Body>
      </Card>
    );
  } else {
    return <></>;
  }
}
