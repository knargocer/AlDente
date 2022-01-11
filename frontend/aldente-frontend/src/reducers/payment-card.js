import * as actionType from "../commons/actionTypes";

const paymentCardReducer = (state = { cards: null }, action) => {
  switch (action.type) {
    case actionType.GETPAYMENTCARDS:
      console.log(action);
      localStorage.setItem("cards", JSON.stringify({ ...action?.data }));
      return { ...state, cards: action.data, loading: false, errors: null };

    default:
      return state;
  }
};

export default paymentCardReducer;
