import React, { useState } from "react";
import HomePageHeader from "../../components/HomePageHeader/HomePageHeader.jsx";
import HomePageFilters from "../../components/HomePageFilters/HomePageFilters.jsx";
import { Container } from "react-bootstrap";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
import UserCard from "../../components/UserCard/UserCard.jsx";
import "./home.css";

export default function Home() {
  const [filterItems, setfilterItems] = useState({ productsData: [] });
  const [searchItems, setSearchItems] = useState({
    usersData: [],
    productsData: [],
  });
  const [notFoundFlag, setNotFoundFlag] = useState(false);

  const handleCallbackFilter = (childData) => {
    setNotFoundFlag(false);
    if (childData.usersData !== undefined) {
      if (
        childData.usersData.length === 0 &&
        childData.productsData.length === 0
      ) {
        setNotFoundFlag(true);
      }
    } else {
      if (childData.productsData.length === 0 && childData.callFlag) {
        setNotFoundFlag(true);
      }
    }
    setfilterItems(childData);
  };

  const handleCallbackSearch = (childData) => {
    setNotFoundFlag(false);
    if (
      childData.usersData.length === 0 &&
      childData.productsData.length === 0
    ) {
      setNotFoundFlag(true);
    }
    setSearchItems(childData);
  };

  return (
    <Container>
      <HomePageHeader parentCallback={handleCallbackSearch} />
      <HomePageFilters parentCallback={handleCallbackFilter} />
      <Container className="searchResultsContainer">
        {searchItems.usersData ? (
          searchItems.usersData.map((x) => {
            return <UserCard user={x} />;
          })
        ) : (
          <></>
        )}
        {searchItems.productsData ? (
          searchItems.productsData.map((x) => {
            return <ProductCard product={x} />;
          })
        ) : (
          <></>
        )}
        {notFoundFlag ? (
          <p className="notFoundMessage">
            Sorry :( There Were No Results For Your Search
          </p>
        ) : (
          <></>
        )}
        {filterItems.productsData ? (
          filterItems.productsData.map((x) => {
            return <ProductCard product={x} />;
          })
        ) : (
          <></>
        )}
        {notFoundFlag ? (
          <p className="notFoundMessage">
            Sorry :( There Were No Results For Your Search
          </p>
        ) : (
          <></>
        )}
      </Container>
    </Container>
  );
}
