import * as actionType from "../commons/actionTypes";

const orderItemReducer = (state = { orderitems: null }, action) => {
  switch (action.type) {
    case actionType.GETORDERITEMS:
      console.log(action);
      localStorage.setItem("order-items", JSON.stringify({ ...action?.data }));
      return {
        ...state,
        orderitems: action.data,
        loading: false,
        errors: null,
      };

    case actionType.REMOVEORDERITEM:
      console.log(action);
      let data = state.orderitems.filter(
        (item) => item._id !== action.payload.orderItem_id
      );
      localStorage.setItem("order-items", JSON.stringify({ data }));
      return { ...state, orderitems: data, loading: false, errors: null };
    default:
      return state;
  }
};

export default orderItemReducer;
