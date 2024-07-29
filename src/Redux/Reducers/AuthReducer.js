import { SET_USER_LOGGED_IN } from "../ReduxConstants";

const initialState = {
  isUserLoggedIn: {},
};
const authReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_USER_LOGGED_IN:
      return {
        ...state,
        isUserLoggedIn: action?.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
