/**
 * Created by songzhongkun on 2018/5/22.
 */
'use strict';
import config from 'config';
import { network } from 'utils';

const prefix = 'SHUMIAO';

export const FETCH_NUMBER_REQUEST = `${prefix}.FETCH_NUMBER_REQUEST`;
export const FETCH_NUMBER_SUCCESS = `${prefix}.FETCH_NUMBER_SUCCESS`;
export const FETCH_NUMBER_FAILURE = `${prefix}.FETCH_NUMBER_FAILURE`;

function fetchNumberRequest() {
  return {
    type: FETCH_NUMBER_REQUEST,
  };
}

function fetchNumberSuccess(data) {
  return {
    type: FETCH_NUMBER_SUCCESS,
    payload: data,
  };
}

function fetchNumberFailure(err) {
  return {
    type: FETCH_NUMBER_FAILURE,
    payload: err,
  };
}

export function fetchNumber() {
  return dispatch => {
    dispatch(fetchNumberRequest());
    return network.get(`${config.api_host}/sm/number`)
      .then(res => {
        dispatch(fetchNumberSuccess(res));
      })
      .catch(err => {
        dispatch(fetchNumberFailure(err));
      });
  };
}

export const CONFIRM_NUMBER_SUCCESS = `${prefix}.CONFIRM_NUMBER_SUCCESS`;
export const CONFIRM_NUMBER_FAILURE = `${prefix}.CONFIRM_NUMBER_FAILURE`;

function confirmNumberSuccess(data) {
  return {
    type: CONFIRM_NUMBER_SUCCESS,
    payload: data,
  };
}

function confirmNumberFailure(err) {
  return {
    type: CONFIRM_NUMBER_FAILURE,
    payload: err,
  };
}

export function confirmNumber(params) {
  return dispatch => {
    return network.post(`${config.api_host}/sm/confirm`, params)
      .then(data => dispatch(confirmNumberSuccess(data)))
      .catch(err => dispatch(confirmNumberFailure(err)));
  };
}