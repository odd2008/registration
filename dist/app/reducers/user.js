/**
 * Created by songzhongkun on 2017/10/24.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _actions = require('../actions');

function data() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.User.SIGNIN_SUCCESS:
      return action.payload;
    case _actions.User.SIGNOUT_SUCCESS:
      return {};
    case _actions.User.GET_PA_INFO_SUCCESS:
      return _extends({}, state, {
        paUser: action.payload.paUser,
        paPackageId: action.payload.paPackageId
      });
    default:
      return state;
  }
}

var modifyPwdData = function modifyPwdData() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.User.MODIFY_PWD_SUCCESS:
    case _actions.User.MODIFY_PWD_FAILURE:
      return action.payload;
    default:
      return state;
  }
};

function loading() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var action = arguments[1];

  switch (action.type) {
    case _actions.User.SIGNIN_REQUEST:
    case _actions.User.SIGNIN_FAILURE:
    case _actions.User.MODIFY_PWD_REQUEST:
    case _actions.User.MODIFY_PWD_FAILURE:
      return true;
    case _actions.User.SIGNIN_SUCCESS:
    case _actions.User.MODIFY_PWD_SUCCESS:
      return false;
    default:
      return state;
  }
}

exports.default = (0, _redux.combineReducers)({
  data: data,
  modifyPwdData: modifyPwdData,
  loading: loading
});