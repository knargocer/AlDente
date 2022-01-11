import { GETUSERS } from "../commons/actionTypes";
import * as api from "../api/index.js";

export const getUsers = (history) => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: GETUSERS, data });
    history.push("/home");
  } catch (error) {
    console.log("users fetching error");
    console.log(error);
  }
};
