import { ADDPRODUCT, GETPRODUCTS } from "../commons/actionTypes";
import * as api from "../api/index.js";

export const addProduct = (formIn, history) => async (dispatch) => {
  try {
    const { data } = await api.addProduct(formIn);
    dispatch({ type: ADDPRODUCT, data });
    history.push("/cook");
  } catch (error) {
    console.log("prouct adding error");
    console.log(error);
  }
};

export const getProducts = (history) => async (dispatch) => {
  try {
    const { data } = await api.getProducts();
    dispatch({ type: GETPRODUCTS, data });
  } catch (error) {
    console.log("product fetching error");
    console.log(error);
  }
};
