import React from "react";
import { Container } from "react-bootstrap";
import AboutText from "../../components/AboutText/AboutText";
import { Form, Col } from "react-bootstrap";
import AboutCommunity from "./images/AboutCommunity.png";
import "./About.css";

export default function About() {
  return (
    <>
      <Container className="aboutLabelContainer">
        <Form.Label className="aboutLabel">About AlDente </Form.Label>
      </Container>
      <Container className="aboutContainer">
        <Col lg={6} sm={2}>
          <Form.Label className="missionLabel">Our Mission </Form.Label>
          <AboutText />
        </Col>
        <Col lg={6} sm={2}>
          <img
            className="aboutImage"
            src={AboutCommunity}
            alt="AboutCommunity"
          />
        </Col>
      </Container>
    </>
  );
}
