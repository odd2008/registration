/**
 * Created by songzhongkun on 2017/10/24.
 */
'use strict';

import {combineReducers} from 'redux';
import {User} from '../actions';

function data(state = {}, action) {
  switch (action.type) {
  case User.SIGNIN_SUCCESS:
    return action.payload;
  case User.SIGNOUT_SUCCESS:
    return {};
  case User.GET_PA_INFO_SUCCESS:
    return {
      ...state,
      paUser: action.payload.paUser,
      paPackageId: action.payload.paPackageId,
    };
  default:
    return state;
  }
}

const modifyPwdData = (state = {}, action) => {
  switch (action.type) {
  case User.MODIFY_PWD_SUCCESS:
  case User.MODIFY_PWD_FAILURE:
    return action.payload;
  default:
    return state;
  }
};

function loading(state = true, action) {
  switch (action.type) {
  case User.SIGNIN_REQUEST:
  case User.SIGNIN_FAILURE:
  case User.MODIFY_PWD_REQUEST:
  case User.MODIFY_PWD_FAILURE:
    return true;
  case User.SIGNIN_SUCCESS:
  case User.MODIFY_PWD_SUCCESS:
    return false;
  default:
    return state;
  }
}

export default combineReducers({
  data,
  modifyPwdData,
  loading,
});
