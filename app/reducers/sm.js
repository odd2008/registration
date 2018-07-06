'use strict';

import {combineReducers} from 'redux';
import {Sm} from '../actions';

function data(state = {}, action) {
  switch (action.type) {
  case Sm.FETCH_NUMBER_SUCCESS:
    return action.payload;
  default:
    return state;
  }
}

function loading(state = true, action) {
  switch (action.type) {
  case Sm.FETCH_NUMBER_SUCCESS:
  case Sm.FETCH_NUMBER_FAILURE:
    return false;
  case Sm.FETCH_NUMBER_REQUEST:
    return true;
  default:
    return state;
  }
}

export default combineReducers({
  data,
  loading,
});
