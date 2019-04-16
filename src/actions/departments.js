import * as actionTypes from './actionTypes';
import { appConstants } from '../constants';
import axios from 'axios';

// Actions related to department
export function getDepartmentsSuccess(response){
  return  {
    type: actionTypes.GET_DEPARTMENTS_SUCCESS,
    payload: {
        response
    }}
}

export  function getDepartmentsError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_DEPARTMENTS_ERROR,
      payload: error
    });
  }
}

export function getDepartments() {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/departments`)
      .then(response => {
        dispatch(getDepartmentsSuccess(response))
      })
      .catch(error=> {
        dispatch(getDepartmentsError(error.message))
      });
  };
}

