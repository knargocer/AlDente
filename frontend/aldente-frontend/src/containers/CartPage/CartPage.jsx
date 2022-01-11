import React, { useEffect } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./CartPage.css";
import CartItemCard from "../../components/CartItemCard/CartItemCard";
import { deleteOrderItem, getOrderItems } from "../../actions/order-item";
import { addOrder } from "../../actions/order";

export default function CartPage() {
  let username = JSON.parse(localStorage.getItem("profile")).username;
  const dispatch = useDispatch();
  const history = useHistory();

  const orderItemsArray = useSelector(
    (state) => state.orderItemReducer.orderitems
  );
  const cartItems = orderItemsArray
    ? orderItemsArray.filter((c) =>
        c ? c.client_username === username : false
      )
    : [];

  let overallPrice =
    cartItems.length > 0
      ? cartItems.map((item) => item.price).reduce((prev, next) => prev + next)
      : 0;

  const handleConfirmOrder = () => {
    const now = new Date();
    const cook_usernameCartItem = cartItems[0].cook_username;
    const order = {
      date: now,
      client_username: username,
      price: overallPrice,
      orderitems: cartItems,
      cook_username: cook_usernameCartItem,
      done: false,
    };

    dispatch(addOrder(order, history));

    cartItems.forEach((item) => {
      const id = item._id;
      dispatch(deleteOrderItem(id));
    });
  };
  useEffect(() => {
    dispatch(getOrderItems(history));
  }, [dispatch, history]);

  return (
    <Container className="cartPageContainer">
      <Container className="cartItems">
        {cartItems.map((cartItem) => {
          return <CartItemCard cartItem={cartItem} />;
        })}
      </Container>
      {overallPrice !== 0 ? (
        <>
          <Form.Label className="overallCostLabel">
            {" "}
            Overall: {overallPrice}$
          </Form.Label>
          <Button className="editButton" onClick={handleConfirmOrder}>
            Order
          </Button>
        </>
      ) : (
        <p className="notFoundMessage">
          There Are No Products Added to the Cart Yet
        </p>
      )}
    </Container>
  );
}
