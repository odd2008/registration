/**
 * Created by songzhongkun on 2018/5/22.
 */
'use strict';
import config from 'config';
import {network} from 'utils';

const prefix = 'DOCTOR';

export const FETCH_REQUEST = `${prefix}.FETCH_REQUEST`;
export const FETCH_SUCCESS = `${prefix}.FETCH_SUCCESS`;
export const FETCH_FAILURE = `${prefix}.FETCH_FAILURE`;

function fetchDoctorRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchDoctorSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
}

function fetchDoctorFailure(err) {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
}

export function fetchDoctors(params) {
  return dispatch => {
    dispatch(fetchDoctorRequest());
    return network.post(`${config.api_host}/getDoctors`, params)
      .then(res => {
        dispatch(fetchDoctorSuccess(res));
      })
      .catch(err => {
        dispatch(fetchDoctorFailure(err));
      });
  };
}

export const ADD_REQUEST = `${prefix}.ADD_REQUEST`;
export const ADD_SUCCESS = `${prefix}.ADD_SUCCESS`;
export const ADD_FAILURE = `${prefix}.ADD_FAILURE`;

function addDoctorRequest() {
  return {
    type: ADD_REQUEST,
  };
}

function addDoctorSuccess(data) {
  return {
    type: ADD_SUCCESS,
    payload: data,
  };
}

function addDoctorFailure(err) {
  return {
    type: ADD_FAILURE,
    payload: err,
  };
}

export function addDoctor(params) {
  return dispatch => {
    dispatch(addDoctorRequest());
    return network.post(`${config.api_host}/addDoctor`, params)
      .then(res => {
        dispatch(addDoctorSuccess(res));
      })
      .catch(err => {
        dispatch(addDoctorFailure(err));
      });
  };
}