import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  productDetail: {},
  error: {},
  success: undefined
}

const productDetail = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAIL_SUCCESS:
      return { ...state, productDetail: action.payload.response, success: true };
    case actionTypes.GET_ALL_PRODUCT_DETAIL_ERROR:
      return { ...state, error: action.payload.data.error };
    default:
      return {...state, success: false}
  }
}

export default productDetail;