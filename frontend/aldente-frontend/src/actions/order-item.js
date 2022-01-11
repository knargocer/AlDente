import {
  ADDORDERITEM,
  GETORDERITEMS,
  REMOVEORDERITEM,
} from "../commons/actionTypes";
import * as api from "../api/index.js";

export const addOrderItem = (dataIn, history) => async (dispatch) => {
  try {
    const { data } = await api.addOrderItem(dataIn);
    dispatch({ type: ADDORDERITEM, data });
  } catch (error) {
    console.log("order item adding error");
    console.log(error);
  }
};

export const getOrderItems = (history) => async (dispatch) => {
  try {
    const { data } = await api.getOrderItems();
    dispatch({ type: GETORDERITEMS, data });
  } catch (error) {
    console.log("order-item fetching error");
    console.log(error);
  }
};

export const deleteOrderItem = (id, history) => async (dispatch) => {
  try {
    const { data } = await api.deleteOrderItem(id);
    const payload = { message: data, orderItem_id: id };
    dispatch({ type: REMOVEORDERITEM, payload });
  } catch (error) {
    console.log("order item deleting error");
    console.log(error);
  }
};
