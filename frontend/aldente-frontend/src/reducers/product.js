import * as actionType from "../commons/actionTypes";

const productReducer = (state = { products: null }, action) => {
  switch (action.type) {
    case actionType.GETPRODUCTS:
      console.log(action);
      localStorage.setItem("products", JSON.stringify({ ...action?.data }));
      return { ...state, products: action.data, loading: false, errors: null };

    default:
      return state;
  }
};

export default productReducer;
