import React from "react";
import { Container } from "react-bootstrap";
import ProductForm from "../../components/ProductForm/ProductForm";
import Bag from "./images/Bag.jpg";
import "./ProductPage.css";

export default function ProductPage() {
  return (
    <Container className="productContainer">
      <img className="productPageImage" src={Bag} alt="bag" />
      <Container className="productForm">
        <ProductForm />
      </Container>
    </Container>
  );
}
