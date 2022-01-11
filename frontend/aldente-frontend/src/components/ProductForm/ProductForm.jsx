import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import "./ProductForm.css";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../actions/product";

export default function ProductForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [ingredient, setIngredient] = useState({ name: "", catagory: "" });
  const [ingredientsArray, setIngredients] = useState([]);
  const user = JSON.parse(localStorage.getItem("profile")).username;
  const [formIn, setFormIn] = useState({
    cook_username: user,
    avaliability: "NOT AVALIABLE",
    name: "",
    cuisine: "",
    price: "",
    ingredients: [],
    type: "",
  });

  const handleChange = (e) => {
    setFormIn({
      ...formIn,
      [e.target.name]: e.target.value,
      ingredients: ingredientsArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(formIn, history));
  };
  const handleIngredient = (e) => {
    if (e.target.name === "catagory") {
      const value = { name: e.target.value };
      setIngredient({ ...ingredient, [e.target.name]: value });
    } else {
      setIngredient({ ...ingredient, [e.target.name]: e.target.value });
    }
  };

  const handleDeleteIngredient = (e) => {
    e.preventDefault();
    setIngredients(
      ingredientsArray.filter((ing) => ing.name !== e.target.value)
    );
  };

  const handleIngredientSubmit = (e) => {
    e.preventDefault();
    setIngredients([...ingredientsArray, ingredient]);
  };

  return (
    <Container className="globalFormContainer productFormContainer">
      <form className="bodyForm">
        <div className="form-check">
          <input
            className="form-check-input"
            onChange={handleChange}
            name="avaliability"
            type="radio"
            id="avaliable"
            value="AVALIABLE"
          />
          <label className="form-check-label">Avaliable</label>
        </div>
        <div className="form-group ">
          <i className="fa fa-user formIcon"></i>
          <input
            type="name"
            name="name"
            onChange={handleChange}
            className="form-control"
            id="nameEntry"
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="cuisine"
            name="cuisine"
            onChange={handleChange}
            className="form-control"
            id="cuisineEntry"
            placeholder="Cuisine"
          />
        </div>

        <div className="form-group">
          <i className="fa fa-user formIcon"></i>
          <input
            type="price"
            name="price"
            onChange={handleChange}
            className="form-control"
            id="priceEntry"
            placeholder="Price"
          />
        </div>

        <div className="form-group"></div>

        <div className="form-group ingredientFormGroup">
          <i className="fa fa-user formIcon"></i>
          <input
            type="ingredients"
            name="name"
            onChange={handleIngredient}
            className="form-control"
            id="ingredientEntry"
            placeholder="Add a new ingredient"
          />

          <label className="typeDropdownLabel">Ingredient Catagory:</label>
          <select
            className="typesDrop"
            name="catagory"
            onChange={handleIngredient}
          >
            <option className="typeDropdown" value="MEAT">
              Meat
            </option>
            <option className="typeDropdown" value="FRUIT">
              Fruit
            </option>
            <option className="typeDropdown" value="DAIRY">
              Dairy
            </option>
            <option className=" typeDropdown" value="SEASONING">
              Seasoning
            </option>
            <option className=" typeDropdown" value="VEGETABLE">
              Vegetable
            </option>
            <option className="typeDropdown" value="OIL">
              Oil
            </option>
            <option className="typeDropdown" value="DOUGH">
              Dough
            </option>
            <option className="typeDropdown" value="SAUSE">
              Sause
            </option>
            <option className="typeDropdown" value="OTHER">
              Other
            </option>
          </select>
          <Button
            type="submit"
            className="btn btn-primary submitButton submitButtoningredient"
            onClick={handleIngredientSubmit}
          >
            Add
          </Button>
        </div>

        <div>
          {ingredientsArray.map((ingredient) => (
            <button
              value={ingredient.name}
              onClick={handleDeleteIngredient}
              className="submitButton ingredientNamesButton"
            >
              {ingredient.name}
            </button>
          ))}
        </div>

        <div className="form-group productTypesDiv">
          <label className="typeDropdownLabel" id="productTypes">
            Type:
          </label>
          <select className="typesDrop" name="type" onChange={handleChange}>
            <option className="typeDropdown" value="DESSERT">
              Dessert
            </option>
            <option className="typeDropdown" value="APPETIZER">
              Appetizer
            </option>
            <option className=" typeDropdown" value="DISH">
              Main Dish
            </option>
            <option className="typeDropdown" value="DRINK">
              Drink
            </option>
            <option className="typeDropdown" value="SOUP">
              Soup
            </option>
            <option className="typeDropdown" value="SALAD">
              Salad
            </option>
          </select>
        </div>

        <Button
          type="submit"
          className="btn btn-primary submitButton"
          onClick={handleSubmit}
        >
          Add a new JOY!
        </Button>
      </form>
    </Container>
  );
}
