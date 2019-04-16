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

export function getAllProductsCategoriesSuccess(response,category_id){
  return  {
    type: actionTypes.GET_ALL_PRODUCT_LIST_CAT_SUCCESS,
    payload: {
        response: response,
        category_id: category_id
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
        dispatch(getAllProductListError(error.message))
      });
  };
}

export function reviewSuccess(response){
  return  {
    type: actionTypes.GET_REVIEW_SUCCESS,
    payload: {
        response
    }}
}

export  function reviewError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_REVIEW_ERROR,
      payload: error
    });
  }
}

export function review(product_id, review, rating, access_token) {
  return function (dispatch) {
    var headers = {
      'user-key': access_token
    }
    axios.post(`${appConstants.WEB_SERVICE_URL}/products/${product_id}/reviews`, {"product_id": product_id,"review": review, "rating": rating}, {headers: headers})
      .then(response => {
        dispatch(reviewSuccess(response))
      })
      .catch(error=> {
        dispatch(reviewError(error.message))
      });
  };
}



export function getProductByCategoryIdList(category_id) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/products/inCategory/${category_id}`)
      .then(response => {
        dispatch(getAllProductsCategoriesSuccess(response,category_id))
      })
      .catch(error=> {
        dispatch(getAllProductListError(error.message))
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
        dispatch(getAllProductListError(error.message))
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
               dispatch(getProductDetailError(error.message))
             })
        }
      })
      .catch(error=> {
        dispatch(getProductDetailError(error.message))
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
        dispatch(getProductByQueryStringError(error.message))
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


export function updateCartSuccess(response){
  return  {
    type: actionTypes.UPDATE_CART_SUCCESS,
    payload: {
        response
    }}
}
export  function updateCartError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.UPDATE_CART_ERROR,
      payload: error
    });
  }
}

export function updateUserCart(item_id, quantity) {
  return function (dispatch) {
    axios.put(`${appConstants.WEB_SERVICE_URL}/shoppingcart/update/{item_id}`, {"item_id": item_id, "quantity": quantity})
      .then(response => {
        dispatch(updateCartSuccess(response))
      })
      .catch(error=> {
        dispatch(updateCartError(error.message))
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


export function getUserCart(cart_id) {
    console.log(33333, cart_id)

  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/shoppingcart/${cart_id}`)
      .then(response => {
        dispatch(getCartSuccess(response))
      })
      .catch(error=> {
        dispatch(getCartError(error.message))
      });
  };
}


export function emptyUserCartSuccess(response){
  return  {
    type: actionTypes.EMPTY_USER_CART_SUCCESS,
    payload: {
        response
    }}
}
export  function emptyUserCartError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.EMPTY_USER_CART_SUCCESS,
      payload: error
    });
  }
}


export function emptyUserCart(cart_id) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/shoppingcart/empty/${cart_id}`)
      .then(response => {
        dispatch(emptyUserCartSuccess(response))
      })
      .catch(error=> {
        dispatch(emptyUserCartError(error.message))
      });
  };
}

