/**
 * Created by songzhongkun on 2018/5/22.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD_FAILURE = exports.ADD_SUCCESS = exports.ADD_REQUEST = exports.FETCH_FAILURE = exports.FETCH_SUCCESS = exports.FETCH_REQUEST = undefined;
exports.fetchDoctors = fetchDoctors;
exports.addDoctor = addDoctor;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prefix = 'DOCTOR';

var FETCH_REQUEST = exports.FETCH_REQUEST = prefix + '.FETCH_REQUEST';
var FETCH_SUCCESS = exports.FETCH_SUCCESS = prefix + '.FETCH_SUCCESS';
var FETCH_FAILURE = exports.FETCH_FAILURE = prefix + '.FETCH_FAILURE';

function fetchDoctorRequest() {
  return {
    type: FETCH_REQUEST
  };
}

function fetchDoctorSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data
  };
}

function fetchDoctorFailure(err) {
  return {
    type: FETCH_FAILURE,
    payload: err
  };
}

function fetchDoctors(params) {
  return function (dispatch) {
    dispatch(fetchDoctorRequest());
    return _utils.network.post(_config2.default.api_host + '/getDoctors', params).then(function (res) {
      dispatch(fetchDoctorSuccess(res));
    }).catch(function (err) {
      dispatch(fetchDoctorFailure(err));
    });
  };
}

var ADD_REQUEST = exports.ADD_REQUEST = prefix + '.ADD_REQUEST';
var ADD_SUCCESS = exports.ADD_SUCCESS = prefix + '.ADD_SUCCESS';
var ADD_FAILURE = exports.ADD_FAILURE = prefix + '.ADD_FAILURE';

function addDoctorRequest() {
  return {
    type: ADD_REQUEST
  };
}

function addDoctorSuccess(data) {
  return {
    type: ADD_SUCCESS,
    payload: data
  };
}

function addDoctorFailure(err) {
  return {
    type: ADD_FAILURE,
    payload: err
  };
}

function addDoctor(params) {
  return function (dispatch) {
    dispatch(addDoctorRequest());
    return _utils.network.post(_config2.default.api_host + '/addDoctor', params).then(function (res) {
      dispatch(addDoctorSuccess(res));
    }).catch(function (err) {
      dispatch(addDoctorFailure(err));
    });
  };
}