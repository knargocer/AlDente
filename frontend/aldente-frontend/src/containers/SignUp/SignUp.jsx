import React from "react";
import SignUpForm from "../../../../aldente-frontend/src/components/SignUpForm/SignUpForm";
import SignUpImg from "./images/SignUpImg.PNG";
import AldenteIcon from "../../AldenteIcon.png";
import { Row, Col, Container } from "react-bootstrap";

import "./SignUp.css";

export default function SignUp() {
  return (
    <Container>
      <Row className="signUpRow">
        <Col md={4} sm={2} lg={6} className="signupImageColumn">
          <img className="aldenteIcon" src={AldenteIcon} alt="aldenteIcon" />
          <img
            className="signUpIcon"
            src={SignUpImg}
            alt="SignUpIllustration"
          />
        </Col>
        <Col md={4} sm={2} lg={6} className="signupFormColumn">
          <SignUpForm />
        </Col>
      </Row>
    </Container>
  );
}
