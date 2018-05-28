'use strict';

import {combineReducers} from 'redux';
import {Patient} from '../actions';

function data(state = {}, action) {
  switch (action.type) {
  case Patient.FETCH_SUCCESS:
    return action.payload;
  default:
    return state;
  }
}

function loading(state = true, action) {
  switch (action.type) {
  case Patient.FETCH_SUCCESS:
  case Patient.FETCH_FAILURE:
    return false;
  case Patient.FETCH_REQUEST:
    return true;
  default:
    return state;
  }
}

export default combineReducers({
  data,
  loading,
});
