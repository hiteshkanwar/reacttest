import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  categories: [],
  error: {},
  success: undefined
}

const categories = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return { ...state, categories: action.payload.response.data, success: true };
    case actionTypes.GET_CATEGORIES_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return {...state, success: false}
  }
}

export default categories;