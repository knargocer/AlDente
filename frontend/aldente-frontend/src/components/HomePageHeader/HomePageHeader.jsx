import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "./HomePageHeader.css";
import AldenteIcon from "../../AldenteIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProducts } from "../../actions/product";
import { getUsers } from "../../actions/users";
import { BsSearch } from "react-icons/bs";
import { scroller } from "react-scroll";

export default function HomePageHeader(props) {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getProducts(history));
    dispatch(getUsers(history));
  }, [dispatch, history]);

  let productsArray = useSelector((state) => state.productReducer.products);
  let usersArray = useSelector((state) => state.userReducer.users);

  const handleChange = (e) => {
    if (e.key === "Enter" && search.length === 0) {
      return;
    }
    setSearch(search + e.key);
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  const scrollToSection = () => {
    scroller.scrollTo("searchResultsContainer", {
      duration: 200,
      delay: 0,
      smooth: "easeInQuad",
    });
  };

  const handleSearchSubmit = () => {
    const users = usersArray.filter(
      (user) =>
        (user.name.includes(search) || user.username.includes(search)) &&
        (user.role === "COOK" || user.role === "BOTH")
    );
    const products = productsArray.filter(
      (product) => product.name === search || product.name.includes(search)
    );
    const data = { usersData: users, productsData: products, callFlag: true };
    props.parentCallback(data);
    setSearch("");
    scrollToSection();
  };
  return (
    <Container className="homeHeader">
      <img className="aldenteIconHome" src={AldenteIcon} alt="aldenteIcon" />
      <div className="searchDiv">
        <input
          type="text"
          className="searchBarHome"
          onKeyPress={handleChange}
          placeholder="Search... "
        />
        <BsSearch onClick={handleSearchSubmit} className="searchButton" />
      </div>
    </Container>
  );
}
