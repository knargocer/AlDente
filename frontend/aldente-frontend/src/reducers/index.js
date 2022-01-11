import { combineReducers } from "redux";
import productReducer from "./product";
import authReducer from "./auth";
import userReducer from "./user";
import orderItemReducer from "./order-item";
import orderReducer from "./order";
import paymentCardReducer from "./payment-card";

export const reducers = combineReducers({
  authReducer,
  productReducer,
  userReducer,
  orderItemReducer,
  orderReducer,
  paymentCardReducer,
});
