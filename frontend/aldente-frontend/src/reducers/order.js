import * as actionType from "../commons/actionTypes";

const orderReducer = (state = { orders: null }, action) => {
  switch (action.type) {
    case actionType.GETORDERS:
      console.log(action);
      localStorage.setItem("orders", JSON.stringify({ ...action?.data }));
      return { ...state, orders: action.data, loading: false, errors: null };

    case actionType.UPDATEORDER:
      console.log(action);
      const updatedOrder = state.orders.filter(
        (item) => item._id === action.payload.order_id
      );
      const otherOrders = state.orders.filter(
        (item) => item._id !== action.payload.order_id
      );
      const updatedOrders = otherOrders.concat(updatedOrder);
      return { ...state, orders: updatedOrders, loading: false, errors: null };

    default:
      return state;
  }
};

export default orderReducer;
