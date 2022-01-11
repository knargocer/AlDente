import React, { useEffect } from "react";
import { Container, Card, Button, Form } from "react-bootstrap";
import "./ProfileCook.css";
import Chef from "./images/Chef.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Products from "../../components/Products/Products";
import OrderCardCook from "../../components/OrderCardCook/OrderCardCook";
import OrderCard from "../../components/OrderCard/OrderCard";
import { getOrders } from "../../actions/order";

export default function ProfileCook() {
  const dispatch = useDispatch();
  const history = useHistory();
  const user =
    JSON.parse(localStorage.getItem("profile")).role === "COOK"
      ? JSON.parse(localStorage.getItem("profile"))
      : undefined;

  const ordersArray = useSelector((state) => state.orderReducer.orders);
  const ordersByTheUser = ordersArray
    ? ordersArray.filter((c) => (c ? c.cook_username === user.username : false))
    : [];
  const notDoneOrders = ordersByTheUser.filter((order) => !order.done);

  const addProduct = () => {
    history.push("/product");
  };

  useEffect(() => {
    dispatch(getOrders(history));
  }, [dispatch, history]);

  return (
    <Container className="profilePageContainer">
      <Container className="profileDetails">
        <Card style={{ width: "18rem" }} className="profileCard">
          <Card.Img className="profileImage" variant="top" src={Chef} />
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
        <Form.Label className="profileLabel">Orders Newly Recieved</Form.Label>
        {notDoneOrders.length > 0 ? (
          notDoneOrders.map((orderRecieved) => (
            <OrderCardCook order={orderRecieved} />
          ))
        ) : (
          <p className="notFoundMessage">There Are No Orders Recieved Yet :(</p>
        )}
        <Container>
          <Form.Label className="profileLabel">
            Products by {user.username}
          </Form.Label>
          <Button className="editButton" variant="primary" onClick={addProduct}>
            Add
          </Button>
        </Container>
        <Products />
        <Form.Label className="profileLabel">Orders Recieved</Form.Label>
        <Container className="allCardsContainer">
          {ordersByTheUser.reverse().map((or) => (
            <OrderCard order={or} />
          ))}
        </Container>
      </Container>
    </Container>
  );
}
