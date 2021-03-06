import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  products: [],
  cart: [],
  error: {},
  success: undefined
}

const products = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload.response.data, success: true };
    case actionTypes.GET_ALL_PRODUCT_LIST_ERROR:
      return { ...state, error: action.payload.message };
    case actionTypes.ADD_CART_SUCCESS:
      return { ...state, cart: action.payload.response.data, success: true };
    case actionTypes.ADD_CART_ERROR:
      return { ...state, error: action.payload.message };
    case actionTypes.GET_CART_SUCCESS:
      return { ...state, cart: action.payload.response.data, success: true };
    case actionTypes.GET_CART_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return {...state, success: false}
  }
}

export default products;