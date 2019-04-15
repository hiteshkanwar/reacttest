import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  productSearch: {},
  error: {},
  success: undefined
}

const productSearch = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_BY_QUERY_STRING_SUCCESS:
      return { ...state, productSearch: action.payload.response, success: true };
    case actionTypes.GET_PRODUCT_BY_QUERY_STRING_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return {...state, success: false}
  }
}

export default productSearch;