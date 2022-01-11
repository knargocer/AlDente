import * as actionType from "../commons/actionTypes";

const userReducer = (state = { userData: null }, action) => {
  switch (action.type) {
    case actionType.GETUSERS:
      console.log(action);
      localStorage.setItem("users", JSON.stringify({ ...action?.data }));
      return { ...state, users: action.data, loading: false, errors: null };

    default:
      return state;
  }
};

export default userReducer;
