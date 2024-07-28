import { SET_USER_LOGGED_IN } from "./ReduxConstants";

export const set_user_logged_in = (payload) => {
  return {
    type: SET_USER_LOGGED_IN,
    payload,
  };
};
