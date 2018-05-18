'use strict';

import qs from 'qs';
import fetch from 'isomorphic-fetch';
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

export const get = (url, query = {}) => fetch(url + qs.stringify(query, {addQueryPrefix: true}), {
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const post = (url, params = {}) => fetch(url, {
  method: 'POST',
  body: JSON.stringify(params),
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const pest = (url, query = {}, params = {}) => fetch(url + qs.stringify(query, {addQueryPrefix: true}), {
  method: 'POST',
  body: JSON.stringify(params),
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})
  .then(handleResponse);

export const handleResponse = response => {
  //if (response.statusText == 'OK') return response.data;
  //else return Promise.reject({
  //  status : response.response.status, 
  //  message: response.response.statusText,
  //});
  if (response.ok) return response.json();
  else return response.json().then(error => Promise.reject({
    status : response.status,
    error,
  }));
};