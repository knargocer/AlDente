import { AUTH } from "../commons/actionTypes";
import * as api from "../api/index.js";

export const login = (formIn, history) => async (dispatch) => {
  try {
    const { data } = await api.login(formIn);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    alert("wrong  credentials ");
    console.log("login error");
    console.log(error);
  }
};

export const signUp = (formIn, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formIn);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log("signing error");
    console.log(error);
  }
};
