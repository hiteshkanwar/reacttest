import * as actionTypes from './actionTypes';
import { appConstants } from '../constants';
import axios from 'axios';


export function getCategoriesSuccess(response){
  return  {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: {
        response
    }}
}

export  function getCategoriesError(error){
 return function(dispatch) {  
    dispatch( {
      type: actionTypes.GET_CATEGORIES_ERROR,
      payload: error
    });
  }
}

export function getCategories(options) {
  return function (dispatch) {
    axios.get(`${appConstants.WEB_SERVICE_URL}/categories?page=${options.page}&limit=${options.limit}`)
      .then(response => {
        dispatch(getCategoriesSuccess(response))
      })
      .catch(error=> {
        dispatch(getCategoriesError(error.message))
      });
  };
}