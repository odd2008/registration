'use strict';

import qs from 'qs';
import fetch from 'isomorphic-fetch';

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
  if (response.ok) return response.json();
  else return response.json().then(error => Promise.reject({
    status : response.status,
    error,
  }));
};