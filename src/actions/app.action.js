import { APP_INIT } from "../constants/index";

export const setApp = app => {
  return dispatch => {
    dispatch({
      type: APP_INIT,
      payload: app
    });
  };
};
