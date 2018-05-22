'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _systemImportTransformerGlobalIdentifier = typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : typeof global !== 'undefined' ? global : {};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _MainFrame = require('./MainFrame');

var _MainFrame2 = _interopRequireDefault(_MainFrame);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loading = function loading(props) {
  return props.error ? _react2.default.createElement(
    'div',
    null,
    'PreLoad Javascirpt Error'
  ) : null;
};

loading.propTypes = {
  error: _propTypes2.default.any
};

if (typeof require.ensure !== 'function') {
  require.ensure = function (modules, callback) {
    callback(require);
  };
}

var Login = (0, _reactLoadable2.default)({
  loader: function loader() {
    return typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./pages/session/Login'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require( /* webpackChunkName: 'home' */'./pages/session/Login'));
      });
    }) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./pages/session/Login']);
  },
  modules: ['./pages/session/Login'],
  webpack: function webpack() {
    return [require.resolveWeak('./pages/session/Login')];
  },
  loading: loading
});

var User = (0, _reactLoadable2.default)({
  loader: function loader() {
    return typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./pages/user'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require( /* webpackChunkName: 'home' */'./pages/user'));
      });
    }) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./pages/user']);
  },
  modules: ['./pages/user'],
  webpack: function webpack() {
    return [require.resolveWeak('./pages/user')];
  },
  loading: loading
});

var Doctor = (0, _reactLoadable2.default)({
  loader: function loader() {
    return typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./pages/doctor'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require( /* webpackChunkName: 'home' */'./pages/doctor'));
      });
    }) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./pages/doctor']);
  },
  modules: ['./pages/doctor'],
  webpack: function webpack() {
    return [require.resolveWeak('./pages/doctor')];
  },
  loading: loading
});

var AddDoctor = (0, _reactLoadable2.default)({
  loader: function loader() {
    return typeof _systemImportTransformerGlobalIdentifier.define === 'function' && _systemImportTransformerGlobalIdentifier.define.amd ? new Promise(function (resolve, reject) {
      _systemImportTransformerGlobalIdentifier.require(['./pages/doctor/add'], resolve, reject);
    }) : typeof module !== 'undefined' && module.exports && typeof require !== 'undefined' || typeof module !== 'undefined' && module.component && _systemImportTransformerGlobalIdentifier.require && _systemImportTransformerGlobalIdentifier.require.loader === 'component' ? new Promise(function (resolve) {
      require.ensure([], function (require) {
        resolve(require( /* webpackChunkName: 'home' */'./pages/doctor/add'));
      });
    }) : Promise.resolve(_systemImportTransformerGlobalIdentifier['./pages/doctor/add']);
  },
  modules: ['./pages/doctor/add'],
  webpack: function webpack() {
    return [require.resolveWeak('./pages/doctor/add')];
  },
  loading: loading
});

var routes = [{
  component: _index2.default,
  routes: [{
    path: '/login',
    exact: true,
    component: Login
  }, {
    component: _MainFrame2.default,
    routes: [{
      path: '/',
      exact: true,
      component: User
    }, {
      path: '/user',
      component: User
    }, {
      path: '/doctor',
      exact: true,
      component: Doctor
    }, {
      path: '/doctor/add',
      component: AddDoctor
    }]
  }]
}];

exports.default = routes;