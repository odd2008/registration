/**
 * Created by songzhongkun on 2017/10/24.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GET_VERIFY_CODE_FAILURE = exports.GET_VERIFY_CODE_SUCCESS = exports.GET_VERIFY_CODE_REQUEST = exports.MODIFY_PWD_FAILURE = exports.MODIFY_PWD_SUCCESS = exports.SIGNUP_FAILURE = exports.SIGNUP_SUCCESS = exports.SIGNOUT_FAILURE = exports.SIGNOUT_SUCCESS = exports.SIGNOUT_REQUEST = exports.SIGNIN_FAILURE = exports.SIGNIN_SUCCESS = undefined;
exports.signinSuccess = signinSuccess;
exports.signinFailure = signinFailure;
exports.signin = signin;
exports.signout = signout;
exports.signUpSuccess = signUpSuccess;
exports.signUpFailure = signUpFailure;
exports.signUp = signUp;
exports.modifyPwdSuccess = modifyPwdSuccess;
exports.modifyPwdFailure = modifyPwdFailure;
exports.modifyPwd = modifyPwd;
exports.getVerifyCode = getVerifyCode;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'USER';

/**
 * 登录
 */
var SIGNIN_SUCCESS = exports.SIGNIN_SUCCESS = prefix + '.SIGNIN_SUCCESS';
var SIGNIN_FAILURE = exports.SIGNIN_FAILURE = prefix + '.SIGNIN_FAILURE';

function signinSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload: payload
  };
}

function signinFailure(message) {
  return {
    type: SIGNIN_FAILURE,
    message: message
  };
}

function signin(params) {
  return _utils.network.post(_config2.default.api_host + '/signin', params);
}

/**
 * 登出
 */

var SIGNOUT_REQUEST = exports.SIGNOUT_REQUEST = prefix + '.SIGNOUT_REQUEST';
var SIGNOUT_SUCCESS = exports.SIGNOUT_SUCCESS = prefix + '.SIGNOUT_SUCCESS';
var SIGNOUT_FAILURE = exports.SIGNOUT_FAILURE = prefix + '.SIGNOUT_FAILURE';

function signoutRequest() {
  return {
    type: SIGNOUT_REQUEST
  };
}

function signoutSuccess() {
  return {
    type: SIGNOUT_SUCCESS
  };
}

function signoutFailure(payload) {
  return {
    type: SIGNOUT_FAILURE,
    payload: payload
  };
}

function signout() {
  return function (dispatch) {
    dispatch(signoutRequest());
    return _utils.network.get(_config2.default.api_host + '/signout').then(function () {
      return dispatch(signoutSuccess());
    }).catch(function (err) {
      return dispatch(signoutFailure(err));
    });
  };
}

/**
 * 注册
 */

var SIGNUP_SUCCESS = exports.SIGNUP_SUCCESS = prefix + '.SIGNUP_SUCCESS';
var SIGNUP_FAILURE = exports.SIGNUP_FAILURE = prefix + '.SIGNUP_FAILURE';

function signUpSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload: payload
  };
}

function signUpFailure(payload) {
  return {
    type: SIGNUP_FAILURE,
    payload: payload
  };
}

function signUp(params) {
  return _utils.network.post(_config2.default.api_host + '/signUp', params);
}

/**
 * 修改密码
 */

var MODIFY_PWD_SUCCESS = exports.MODIFY_PWD_SUCCESS = prefix + '.MODIFY_PWD_SUCCESS';
var MODIFY_PWD_FAILURE = exports.MODIFY_PWD_FAILURE = prefix + '.MODIFY_PWD_FAILURE';

function modifyPwdSuccess(payload) {
  return {
    type: MODIFY_PWD_SUCCESS,
    payload: payload
  };
}

function modifyPwdFailure(payload) {
  return {
    type: MODIFY_PWD_FAILURE,
    payload: payload
  };
}

function modifyPwd(params) {
  return _utils.network.post(_config2.default.api_host + '/modifyPwd', params);
}

/**
 * 获取验证码
 */

var GET_VERIFY_CODE_REQUEST = exports.GET_VERIFY_CODE_REQUEST = prefix + '.GET_VERIFY_CODE_REQUEST';
var GET_VERIFY_CODE_SUCCESS = exports.GET_VERIFY_CODE_SUCCESS = prefix + '.GET_VERIFY_CODE_SUCCESS';
var GET_VERIFY_CODE_FAILURE = exports.GET_VERIFY_CODE_FAILURE = prefix + '.GET_VERIFY_CODE_FAILURE';

function getVerifyCodeRequest() {
  return {
    type: GET_VERIFY_CODE_REQUEST
  };
}

function getVerifyCodeSuccess(payload) {
  return {
    type: GET_VERIFY_CODE_SUCCESS,
    payload: payload
  };
}

function getVerifyCodeFailure(payload) {
  return {
    type: GET_VERIFY_CODE_FAILURE,
    payload: payload
  };
}

function getVerifyCode(phone) {
  console.log(_config2.default.api_host + '/verifycode', { phone: phone });
  return function (dispatch) {
    dispatch(getVerifyCodeRequest());
    return _utils.network.post(_config2.default.api_host + '/verifycode', { phone: phone }).then(function (res) {
      dispatch(getVerifyCodeSuccess(res));
    }).catch(function (err) {
      dispatch(getVerifyCodeFailure(err));
    });
  };
}