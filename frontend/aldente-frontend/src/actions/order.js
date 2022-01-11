import { ADDORDER, GETORDERS, UPDATEORDER } from "../commons/actionTypes";
import * as api from "../api/index.js";

export const addOrder = (dataIn, history) => async (dispatch) => {
  try {
    const { data } = await api.addOrder(dataIn);
    dispatch({ type: ADDORDER, data });
    history.push("/order");
  } catch (error) {
    console.log("order adding error");
    console.log(error);
  }
};

export const getOrders = (history) => async (dispatch) => {
  try {
    const { data } = await api.getOrders();
    dispatch({ type: GETORDERS, data });
  } catch (error) {
    console.log("order fetching error");
    console.log(error);
  }
};

export const updateOrder = (id, done, history) => async (dispatch) => {
  try {
    const { data } = await api.updateOrder(id, done);
    const payload = { message: data, order_id: id };
    dispatch({ type: UPDATEORDER, payload });
  } catch (error) {
    console.log("order update error");
    console.log(error);
  }
};
