import { httpClient } from "../utils/HttpClient";
import {
  HTTP_STOCK_EDIT_SUCCESS,
  HTTP_STOCK_EDIT_FAILED,
  HTTP_STOCK_EDIT_FETCHING,
  HTTP_STOCK_EDIT_INITIALED,
  server
} from "../constants";
// import { setStateStockToFailed } from "./stock.action";
export const setStateStockEditToFetching = () => ({
  type: HTTP_STOCK_EDIT_FETCHING
});
export const setStateStockEditToSuccess = payload => ({
  type: HTTP_STOCK_EDIT_SUCCESS,
  payload
});
export const setStateStockEditToFailed = () => ({
  type: HTTP_STOCK_EDIT_FAILED
});
export const setStateStockEditToInitialed = () => ({
  type: HTTP_STOCK_EDIT_INITIALED
});

export const updateProduct = (history,formData) =>{
    return dispatch=>{
        dispatch(setStateStockEditToFetching())
        httpClient.put(server.PRODUCT_URL,formData).then(result=>{
            dispatch(setStateStockEditToSuccess(result))
            history.goBack();
        }).catch(error=>{
            alert(JSON.stringify(error))
            dispatch(setStateStockEditToFailed())
        })
    }
}