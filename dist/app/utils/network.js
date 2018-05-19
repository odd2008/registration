'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleResponse = exports.pest = exports.post = exports.get = undefined;

var _qs = require('qs');

var _qs2 = _interopRequireDefault(_qs);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import axios from 'axios';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//axios.interceptors.response.use(function (response) {
//  return response;
//}, function (error) {
//  if (error.response) {
//    return Promise.reject({
//      status : error.response.status, 
//      message: error.response.statusText,
//    });  
//  } else if (error.request) {
//    return Promise.reject({
//      status: error.request.status,
//      message: error.request.statusText,
//    });
//  }else{
//    return Promise.reject({
//      status: -1,
//      message: error,
//    });
//  }
//
//});
//
//export const download = url => axios.get(url);
//
//export const get = (url, query = {}) => axios.get(url + qs.stringify(query, { addQueryPrefix: true }))
//  .then(handleResponse);
//
//export const post = (url, params = {}) => axios.post(url,params)
//  .then(handleResponse);
//
//export const pest = (url, query = {}, params = {}) => axios.post(url + qs.stringify(query, {addQueryPrefix: true}), params)
//  .then(handleResponse);

var get = exports.get = function get(url) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _isomorphicFetch2.default)(url + _qs2.default.stringify(query, { addQueryPrefix: true }), {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(handleResponse);
};

var post = exports.post = function post(url) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return (0, _isomorphicFetch2.default)(url, {
    method: 'POST',
    body: JSON.stringify(params),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(handleResponse);
};

var pest = exports.pest = function pest(url) {
  var query = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return (0, _isomorphicFetch2.default)(url + _qs2.default.stringify(query, { addQueryPrefix: true }), {
    method: 'POST',
    body: JSON.stringify(params),
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  }).then(handleResponse);
};

var handleResponse = exports.handleResponse = function handleResponse(response) {
  //if (response.statusText == 'OK') return response.data;
  //else return Promise.reject({
  //  status : response.response.status, 
  //  message: response.response.statusText,
  //});
  if (response.ok) return response.json();else return response.json().then(function (error) {
    return Promise.reject({
      status: response.status,
      error: error
    });
  });
};