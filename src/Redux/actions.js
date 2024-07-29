import { SET_THEME, SET_USER_LOGGED_IN } from "./ReduxConstants";

export const set_user_logged_in = (payload) => {
  return {
    type: SET_USER_LOGGED_IN,
    payload,
  };
};
export const set_theme = (payload) => {
  return {
    type: SET_THEME,
    payload,
  };
};
