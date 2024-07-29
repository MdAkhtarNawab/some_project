import { SET_THEME } from "../ReduxConstants";

const initialState = {
  theme: "dark",
  language: "en",
};

const appReducer = (state = initialState, action) => {
  switch (action?.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action?.payload,
      };
    default:
      return state;
  }
};
export default appReducer;
