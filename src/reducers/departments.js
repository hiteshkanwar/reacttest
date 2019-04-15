import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  departments: [],
  error: {},
  success: undefined
}

const departments = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_DEPARTMENTS_SUCCESS:
      return { ...state, departments: action.payload.response.data, success: true };
    case actionTypes.GET_DEPARTMENTS_ERROR:
      return { ...state, error: action.payload.message };
    default:
      return {...state, success: false}
  }
}

export default departments;