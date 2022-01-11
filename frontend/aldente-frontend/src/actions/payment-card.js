import { ADDPAYMENTCARD, GETPAYMENTCARDS } from "../commons/actionTypes";
import * as api from "../api/index.js";

export const addPaymentCard = (formIn, history) => async (dispatch) => {
  try {
    const { data } = await api.addPaymentCard(formIn);
    dispatch({ type: ADDPAYMENTCARD, data });
    history.push("/card");
  } catch (error) {
    console.log("card adding error");
    console.log(error);
  }
};

export const getPaymentCards = (history) => async (dispatch) => {
  try {
    const { data } = await api.getPaymentCards();
    dispatch({ type: GETPAYMENTCARDS, data });
  } catch (error) {
    console.log("card fetching error");
    console.log(error);
  }
};
