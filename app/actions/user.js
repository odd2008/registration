/**
 * Created by songzhongkun on 2017/10/24.
 */
'use strict';

import config from 'config';
import {network} from 'utils';

const prefix = 'USER';

/**
 * 登录
 */
export const SIGNIN_SUCCESS = `${prefix}.SIGNIN_SUCCESS`;
export const SIGNIN_FAILURE = `${prefix}.SIGNIN_FAILURE`;

export function signinSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
}

export function signinFailure(message) {
  return ({
    type: SIGNIN_FAILURE,
    message,
  });
}

export function signin(params) {
  return network.post(`${config.api_host}/signin`, params);
}

/**
 * 登出
 */

export const SIGNOUT_REQUEST = `${prefix}.SIGNOUT_REQUEST`;
export const SIGNOUT_SUCCESS = `${prefix}.SIGNOUT_SUCCESS`;
export const SIGNOUT_FAILURE = `${prefix}.SIGNOUT_FAILURE`;

function signoutRequest() {
  return {
    type: SIGNOUT_REQUEST,
  };
}

function signoutSuccess() {
  return {
    type: SIGNOUT_SUCCESS,
  };
}

function signoutFailure(payload) {
  return ({
    type: SIGNOUT_FAILURE,
    payload,
  });
}

export function signout() {
  return dispatch => {
    dispatch(signoutRequest());
    return network.get(`${config.api_host}/signout`)
      .then(() => dispatch(signoutSuccess()))
      .catch(err => dispatch(signoutFailure(err)));
  };
}

/**
 * 注册
 */

export const SIGNUP_SUCCESS = `${prefix}.SIGNUP_SUCCESS`;
export const SIGNUP_FAILURE = `${prefix}.SIGNUP_FAILURE`;

export function signUpSuccess(payload) {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
}

export function signUpFailure(payload) {
  return ({
    type: SIGNUP_FAILURE,
    payload,
  });
}

export function signUp(params) {
  return network.post(`${config.api_host}/signUp`, params);
}

/**
 * 修改密码
 */

export const MODIFY_PWD_SUCCESS = `${prefix}.MODIFY_PWD_SUCCESS`;
export const MODIFY_PWD_FAILURE = `${prefix}.MODIFY_PWD_FAILURE`;

export function modifyPwdSuccess(payload) {
  return {
    type: MODIFY_PWD_SUCCESS,
    payload,
  };
}

export function modifyPwdFailure(payload) {
  return ({
    type: MODIFY_PWD_FAILURE,
    payload,
  });
}

export function modifyPwd(params) {
  return network.post(`${config.api_host}/modifyPwd`, params);
}

/**
 * 获取验证码
 */

export const GET_VERIFY_CODE_REQUEST = `${prefix}.GET_VERIFY_CODE_REQUEST`;
export const GET_VERIFY_CODE_SUCCESS = `${prefix}.GET_VERIFY_CODE_SUCCESS`;
export const GET_VERIFY_CODE_FAILURE = `${prefix}.GET_VERIFY_CODE_FAILURE`;

function getVerifyCodeRequest() {
  return {
    type: GET_VERIFY_CODE_REQUEST,
  };
}

function getVerifyCodeSuccess(payload) {
  return {
    type: GET_VERIFY_CODE_SUCCESS,
    payload,
  };
}

function getVerifyCodeFailure(payload) {
  return {
    type: GET_VERIFY_CODE_FAILURE,
    payload,
  };
}

export function getVerifyCode(phone) {
  console.log(`${config.api_host}/verifycode`, {phone});
  return dispatch => {
    dispatch(getVerifyCodeRequest());
    return network.post(`${config.api_host}/verifycode`, {phone})
      .then(res => {
        dispatch(getVerifyCodeSuccess(res));
      })
      .catch(err => {
        dispatch(getVerifyCodeFailure(err));
      });
  };
}