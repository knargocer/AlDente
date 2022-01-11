import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Products.css";
import { getProducts } from "../../actions/product";
import { Card } from "react-bootstrap";
import {
  BsFillBookmarkCheckFill,
  BsGearFill,
  BsFillBookmarkXFill,
} from "react-icons/bs";

export default function Products(props) {
  let username = "";
  props.user
    ? (username = props.user.username)
    : (username = JSON.parse(localStorage.getItem("profile")).username);
  // const username = JSON.parse(localStorage.getItem("profile")).username;
  const dispatch = useDispatch();
  const history = useHistory();

  const productsArrayFetched = useSelector(
    (state) => state.productReducer.products
  );
  const productsArray = productsArrayFetched
    ? productsArrayFetched.filter((c) =>
        c ? c.cook_username === username : false
      )
    : [];

  useEffect(() => {
    dispatch(getProducts(history));
  }, [dispatch, history]);

  return (
    <Container className="allCardsContainer">
      {productsArray.length > 0 ? (
        productsArray.map((product) => (
          <Card className="productCard" style={{ width: "18rem" }}>
            <Card.Body className="productCardBody">
              <div className="headerCard">
                <Card.Title className="productCardTitle">
                  {product.name}
                </Card.Title>
                <BsGearFill className="editIconButton" />
              </div>
              {product.avaliability === "AVALIABLE" ? (
                <div>
                  <BsFillBookmarkCheckFill className="avaliablityIcon" />
                  <h6>Avaliable</h6>
                </div>
              ) : (
                <div>
                  <BsFillBookmarkXFill className="avaliablityIcon" />
                  <h6>Not Avaliable</h6>
                </div>
              )}
              <Card.Text className="productCardHeader">Ingredients</Card.Text>
              <div className="ingredientNames">
                {product.ingredients.map((ing) => (
                  <Card.Text className="productCardText">{ing.name}</Card.Text>
                ))}
              </div>
              <Card.Text className="productCardHeader">Couisine</Card.Text>
              <Card.Text className="productCardText">
                {product.cuisine}
              </Card.Text>
              <Card.Text className="productCardHeader">
                {product.price} ${" "}
              </Card.Text>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p className="notFoundMessage">Seems You Didn't Add Any Products Yet</p>
      )}
    </Container>
  );
}
