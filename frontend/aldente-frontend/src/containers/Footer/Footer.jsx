import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
  return (
    <Container className="footerContainer">
      <Row className="footerAll">
        <Col className="contactInfo">
          <h5 className="contactUsLabel">Contact Us</h5>
          <p>
            <i className="fa fa-location-arrow"></i> Berry Street 14 Watermelon
          </p>
          <p>
            <i className="fa fa-phone"></i> +14-9999878398{" "}
          </p>
          <p>
            <i className="fa fa fa-envelope"></i> info@example.com{" "}
          </p>
        </Col>
        <Col className="copyright">
          <p>Aldente @2021 </p>
        </Col>
      </Row>
    </Container>
  );
}
