'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateBusinessDownloadCount = exports.checkUserTypeAndDownloadAuth = exports.getBusinessDownloadCount = exports.getBusinessUserType = undefined;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getBusinessUserType = exports.getBusinessUserType = function getBusinessUserType() {
  _index.network.get(_config2.default.api_host + '/business/getUserType').then(function (payload) {
    return payload;
  }).catch(function (e) {
    Promise.reject(e);
  });
};

var getBusinessDownloadCount = exports.getBusinessDownloadCount = function getBusinessDownloadCount() {
  _index.network.get(_config2.default.api_host + '/business/getDownCountLeft').then(function (payload) {
    return payload;
  }).catch(function (e) {
    Promise.reject(e);
  });
};

var checkUserTypeAndDownloadAuth = exports.checkUserTypeAndDownloadAuth = function checkUserTypeAndDownloadAuth() {
  var needDialogArr = _config2.default.business.needDialogArr || [];
  return _index.network.get(_config2.default.api_host + '/business/getUserType').then(function (userType) {
    if (needDialogArr.indexOf(userType) < 0) return '0'; //正常签约用户，不需要弹窗
    else return userType;
  }).then(function (userType) {
    if (userType == '0') return userType;
    return _index.network.get(_config2.default.api_host + '/business/getDownCountLeft').then(function (payload) {
      return getDownloadState(userType, payload.acceptAgreement, payload.left);
    }).catch(function (e) {
      Promise.reject(e);
    });
  }).catch(function (e) {
    Promise.reject(e);
  });
};

var updateBusinessDownloadCount = exports.updateBusinessDownloadCount = function updateBusinessDownloadCount(params) {

  return _index.network.post(_config2.default.api_host + '/business/updateDownCount', params).then(function (payload) {
    return payload;
  });
};

function getDownloadState(userType, acceptAgreement, downloadLeft) {
  var notHasInfoArr = _config2.default.business.notHasInfoArr || []; //未完善信息
  if (acceptAgreement != 1) {
    return '1'; //需要弹法律条款的框
  } else if (downloadLeft <= 0 && notHasInfoArr.indexOf(userType) >= 0) {
    return '2'; //剩余下载数量未0且未完善信息
  } else if (downloadLeft <= 0 && notHasInfoArr.indexOf(userType) < 0) {
    return '3'; //剩余下载数量未0且未完善信息 D类用户
  }
  return '0';
}