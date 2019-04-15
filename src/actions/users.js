import * as actionTypes from './actionTypes';
import { appConstants } from '../constants';
import axios from 'axios';


export function getLoginSuccess(response){
  return  {
    type: actionTypes.GET_LOGIN_SUCCESS,
    payload: {
        response
    }}
}

export  function getLoginError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_LOGIN_ERROR,
      payload: error
    });
  }
}

export function login(email, password) {
  return function (dispatch) {
    axios.post(`${appConstants.WEB_SERVICE_URL}/customers/login`, {"email": email,"password": password})
      .then(response => {
      	localStorage.setItem('user',JSON.stringify(response.data));
        dispatch(getLoginSuccess(response))
      })
      .catch(error=> {
        dispatch(getLoginError(error.response.data.error))
      });
  };
}

export function getRegisterSuccess(response){
  return  {
    type: actionTypes.GET_REGISTER_SUCCESS,
    payload: {
        response
    }}
}


export  function getRegisterError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_REGISTER_ERROR,
      payload: error
    });
  }
}


export function register(name, email, password) {
  return function (dispatch) {
    axios.post(`${appConstants.WEB_SERVICE_URL}/customers`, {"name": name,"email": email,"password": password})
      .then(response => {
        localStorage.setItem('user',JSON.stringify(response.data));
        dispatch(getRegisterSuccess(response))
      })
      .catch(error=> {
        dispatch(getRegisterError(error.response.data.error))
      });
  };
}

