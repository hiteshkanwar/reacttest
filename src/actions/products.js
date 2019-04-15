import * as actionTypes from './actionTypes';
import { appConstants } from '../constants';
import axios from 'axios';


export function getAllProductListSuccess(response){
  return  {
    type: actionTypes.GET_ALL_PRODUCT_LIST_SUCCESS,
    payload: {
        response
    }}
}

export  function getAllProductListError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_ALL_PRODUCT_LIST_ERROR,
      payload: error
    });
  }
}

export function getAllProductList(options) {

  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products?page=${options.page}&limit=${options.limit}`)
      .then(response => {
        dispatch(getAllProductListSuccess(response))
      })
      .catch(error=> {
        dispatch(getAllProductListError(error.response.data.error))
      });
  };
}

export function getProductByCategoryIdList(category_id) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products/inCategory/${category_id}`)
      .then(response => {
        dispatch(getAllProductListSuccess(response))
      })
      .catch(error=> {
        dispatch(getAllProductListError(error.response.data.error))
      });
  };
}


export function getProductByDepartmentIdList(department_id) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products/inDepartment/${department_id}`)
      .then(response => {
        dispatch(getAllProductListSuccess(response))
      })
      .catch(error=> {
        dispatch(getAllProductListError(error.response.data.error))
      });
  };
}



export function getProductDetailSuccess(response){
  return  {
    type: actionTypes.GET_PRODUCT_DETAIL_SUCCESS,
    payload: {
        response
    }}
}

export  function getProductDetailError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_ALL_PRODUCT_DETAIL_ERROR,
      payload: error
    });
  }
}


export function getProductDetailById(product_id) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products/${product_id}/details`)
      .then(response => {
        if(response.data){
          const product = response.data[0]
          axios.get(`${appConstants.WEB_SERVICE_URL}/attributes/inProduct/${product.product_id}`)
             .then(response => {
                const attributes = response.data
                const finalResponse = {}
                finalResponse['product'] = product
                finalResponse['attributes'] = attributes
                dispatch(getProductDetailSuccess(finalResponse))
             })
             .catch(error=> {
               dispatch(getProductDetailError(error.response.data.error))
             })
        }
      })
      .catch(error=> {
        dispatch(getProductDetailError(error.response.data.error))
      });
  };
}

export function getProductByQueryString(str) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products/search?query_string=${str}`)
      .then(response => {
        dispatch(getProductByQueryStringSuccess(response))
      })
      .catch(error=> {
        dispatch(getProductByQueryStringError(error.response.data.error))
      });
  };
}

export function getProductByQueryStringSuccess(response){
  return  {
    type: actionTypes.GET_ALL_PRODUCT_LIST_SUCCESS,
    payload: {
        response
    }}
}

export  function getProductByQueryStringError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_ALL_PRODUCT_LIST_ERROR,
      payload: error
    });
  }
}

export function addCartSuccess(response){
  return  {
    type: actionTypes.ADD_CART_SUCCESS,
    payload: {
        response
    }}
}
export  function addCartError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.ADD_CART_ERROR,
      payload: error
    });
  }
}

export function addToUserCart(cart_id, product_id, attributes) {
  return function (dispatch) {
    axios.post(`${appConstants.WEB_SERVICE_URL}/shoppingcart/add`, {"cart_id": cart_id.toString(), "product_id": product_id, "attributes": JSON.stringify(attributes)})
      .then(response => {
        dispatch(addCartSuccess(response))
      })
      .catch(error=> {
        dispatch(addCartError(error.message))
      });
  };
}


export function getCartSuccess(response){
  return  {
    type: actionTypes.GET_CART_SUCCESS,
    payload: {
        response
    }}
}
export  function getCartError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_CART_ERROR,
      payload: error
    });
  }
}


export function getUserCart() {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/shoppingcart/508`)
      .then(response => {
        dispatch(getCartSuccess(response))
      })
      .catch(error=> {
        dispatch(getCartError(error.message))
      });
  };
}
