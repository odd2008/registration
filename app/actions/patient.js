/**
 * Created by songzhongkun on 2018/5/22.
 */
'use strict';
import config from 'config';
import {network} from 'utils';

const prefix = 'PATIENT';

export const FETCH_REQUEST = `${prefix}.FETCH_REQUEST`;
export const FETCH_SUCCESS = `${prefix}.FETCH_SUCCESS`;
export const FETCH_FAILURE = `${prefix}.FETCH_FAILURE`;

function fetchPatientsRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchPatientsSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data,
  };
}

function fetchPatientsFailure(err) {
  return {
    type: FETCH_FAILURE,
    payload: err,
  };
}

export function fetchPatients(query) {
  return dispatch => {
    dispatch(fetchPatientsRequest());
    return network.get(`${config.api_host}/patient`, query)
      .then(res => {
        dispatch(fetchPatientsSuccess(res));
      })
      .catch(err => {
        dispatch(fetchPatientsFailure(err));
      });
  };
}