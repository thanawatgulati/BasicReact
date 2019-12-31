import {
  HTTP_STOCK_EDIT_SUCCESS,
  HTTP_STOCK_EDIT_FAILED,
  HTTP_STOCK_EDIT_FETCHING,
  HTTP_STOCK_EDIT_INITIALED,
  server
} from "../constants/index";
const initialState = {
  result: null,
  isFetching: false,
  isError: false,
  isInitialed: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case HTTP_STOCK_EDIT_FETCHING:
      return { ...state,result: null, isFetching: true, isError: false, isInitialed: false };
    case HTTP_STOCK_EDIT_SUCCESS:
      return { ...state, result: null,isFetching: false, isError: false, isInitialed: false };
    case HTTP_STOCK_EDIT_FAILED:
      return { ...state,result: payload, isFetching: false, isError: true, isInitialed: false };
    case HTTP_STOCK_EDIT_INITIALED:
      return { ...state, result: null,isFetching: false, isError: false, isInitialed: true };

    default:
      return state;
  }
};
