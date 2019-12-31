import {
  HTTP_STOCK_FETCHING,
  HTTP_STOCK_SUCCESS,
  HTTP_STOCK_FAILED,
  OK,
  server
} from "../constants";
import { httpClient } from "../utils/HttpClient";

export const setStateStockToSuccess = payload => ({
  type: HTTP_STOCK_SUCCESS,
  payload
});

export const setStateStockToFetching = () => ({
  type: HTTP_STOCK_FETCHING
});

export const setStateStockToFailed = () => ({
  type: HTTP_STOCK_FAILED
});

export const getProducts = () => {
  return dispatch => {
    dispatch(setStateStockToFetching());
    doGetProducts(dispatch);
  };
};

export const getProductByKeyword = event =>{
  return dispatch =>{
    var keyword = event.target.value;
    dispatch(setStateStockToFetching());
    
    if(keyword !== null && keyword != ""){
      httpClient.get(`${server.PRODUCT_URL}/keyword/${keyword}`).then(result=>{
        dispatch(setStateStockToSuccess(result.data))
      })
    }else{
      doGetProducts(dispatch)
    }
  }
}

export const deleteProduct = id => {
  return async dispatch => {
    dispatch(setStateStockToFetching());
    await httpClient.delete(`${server.PRODUCT_URL}/${id}`);
    await doGetProducts(dispatch);
  };
};

export const addProduct = (history,formData) => {
  return async dispatch=>{
    dispatch(setStateStockToFetching());
    await httpClient.post(server.PRODUCT_URL, formData);
    history.goBack();
  }
}

export const getProductById = (id) =>{
  return dispatch =>{
    dispatch(setStateStockToFetching());
      httpClient.get(`${server.PRODUCT_URL}/${id}`).then(result=>{
        dispatch(setStateStockToSuccess(result.data))
      }).catch(error=>{
        console.log(JSON.stringify(error));
        dispatch(setStateStockToFailed());
      })
  }
}

export const updateProduct = (history,formData) =>{
  return  dispatch=>{
    dispatch(setStateStockToFetching());
    httpClient.post(server.PRODUCT_URL, formData).then(result=>{
      dispatch(setStateStockToSuccess(result));
      history.goBack();
    }).catch(error=>{
      dispatch(setStateStockToFailed());
    })
  }
}

const doGetProducts = dispatch => {
  httpClient
    .get(server.PRODUCT_URL)
    .then(result => {
      dispatch(setStateStockToSuccess(result.data));
    })
    .catch(error => {
      console.log(JSON.stringify(error));
      dispatch(setStateStockToFailed());
    });
};
