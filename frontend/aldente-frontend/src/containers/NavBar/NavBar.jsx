import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Row, Button } from "react-bootstrap";
import AldenteIcon from "../../AldenteIcon.png";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../commons/actionTypes";
import { BsFillCartFill } from "react-icons/bs";

import "./NavBar.css";

export default function SignUpForm() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });
    history.push("/login");
    setUser(null);
  };

  const profile = () => {
    if (user.role === "COOK") {
      history.push("/cook");
    }
    if (user.role === "CLIENT") {
      history.push("/client");
    }
  };

  const handleCartClick = () => {
    history.push("/cart");
  };

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken);
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user?.token]);

  return (
    <Navbar
      className="NavBar"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="home">
          {" "}
          <img src={AldenteIcon} width="45" height="45" alt="aldenteIcon" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="navLink" href="home">
              Home
            </Nav.Link>
            <Nav.Link className="navLink" href="about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            {user ? (
              <Row className="navButtonsUserControl">
                {user.role === "CLIENT" ? (
                  <BsFillCartFill
                    onClick={handleCartClick}
                    className="cartButton"
                  />
                ) : (
                  <></>
                )}
                <Button className="profileButton" onClick={profile}>
                  {user.username.charAt(0)}
                </Button>
                <Button className="logoutButton" onClick={logout}>
                  Logout
                </Button>
              </Row>
            ) : (
              <>
                <Nav.Link className="authLink" href="login">
                  Login
                </Nav.Link>
                <Nav.Link className="authLink" href="signup">
                  SignUp
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
