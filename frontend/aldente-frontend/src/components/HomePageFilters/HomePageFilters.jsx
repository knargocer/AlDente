import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { scroller } from "react-scroll";
import "./HomePageFilters.css";

export default function SignUpForm(props) {
  const [callFlag, setCallFlag] = useState(false);
  const [filterItems, setFilterItems] = useState({
    productsData: [],
    callFlag: callFlag,
  });
  const productsArray = useSelector((state) => state.productReducer.products);

  const scrollToSection = () => {
    scroller.scrollTo("searchResultsContainer", {
      duration: 200,
      delay: 0,
      smooth: "easeInQuad",
    });
  };

  useEffect(() => {
    props.parentCallback(filterItems);
    setFilterItems(filterItems);
  }, [filterItems, props]);

  const handleFilter = (e) => {
    const value = e.target.value;
    setCallFlag(true);
    switch (value) {
      case "SOUP":
      case "SALAD":
      case "APPETIZER":
      case "DRINK":
      case "DESSERT":
      case "DISH":
        setFilterItems({
          productsData: productsArray.filter((x) => x.type === value),
          callFlag: callFlag,
        });
        break;
      case "mexican":
      case "middle eastern":
      case "asian":
        setFilterItems({
          productsData: productsArray.filter((x) => x.cuisine === value),
          callFlag: callFlag,
        });
        break;
      case "VEGAN":
        let notVegan = [];
        let vegan = [];
        productsArray.forEach((x) => {
          x.ingredients.forEach((ing) => {
            if (ing.catagory === "DAIRY" || ing.catagory === "MEAT") {
              notVegan.push(x);
            }
          });
        });
        vegan = productsArray.filter((i) => !notVegan.includes(i));
        setFilterItems({ productsData: vegan, callFlag: callFlag });
        break;
      case "VEGETERIAN":
        let notVeg = [];
        let veget = [];
        productsArray.forEach((x) => {
          x.ingredients.forEach((ing) => {
            if (ing.catagory === "MEAT") {
              notVeg.push(x);
            }
          });
        });
        veget = productsArray.filter((i) => !notVeg.includes(i));
        setFilterItems({ productsData: veget, callFlag: callFlag });
        break;
      default:
        setFilterItems({ productsData: [] });
        break;
    }
    scrollToSection();
  };

  return (
    <Container className="homeFiltersContainer">
      <Button className="filterButtonHome" onClick={handleFilter} value="DISH">
        Main Dishes
      </Button>
      <Button
        className="filterButtonHome"
        onClick={handleFilter}
        value="DESSERT"
      >
        Desserts
      </Button>
      <Button
        className="filterButtonHome"
        onClick={handleFilter}
        value="APPETIZER"
      >
        Appetizers
      </Button>
      <Button className="filterButtonHome" onClick={handleFilter} value="DRINK">
        Drinks
      </Button>
      <Button
        className="filterButtonHome"
        onClick={handleFilter}
        value="VEGETERIAN"
      >
        Vegeterian
      </Button>
      <Button className="filterButtonHome" onClick={handleFilter} value="VEGAN">
        Vegan
      </Button>
      <Button className="filterButtonHome" onClick={handleFilter} value="SALAD">
        Salads
      </Button>
      <Button className="filterButtonHome" onClick={handleFilter} value="SOUP">
        Soups
      </Button>
      <Button className="filterButtonHome" onClick={handleFilter} value="asian">
        Asian
      </Button>
      <Button
        className="filterButtonHome"
        onClick={handleFilter}
        value="middle eastern"
      >
        Middle Eastern
      </Button>
      <Button
        className="filterButtonHome"
        onClick={handleFilter}
        value="mexican"
      >
        Mexican
      </Button>
    </Container>
  );
}
