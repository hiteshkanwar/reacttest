import * as actionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
  user: {},
  error: {},
  success: undefined
}

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_LOGIN_SUCCESS:
      return { ...state, user: action.payload.response.data, success: true, authenticated: true };
    case actionTypes.GET_LOGIN_ERROR:
      return { ...state, error: action.payload.message, authenticated: false };
    default:
      return {...state, success: false}
  }
}

export default users;