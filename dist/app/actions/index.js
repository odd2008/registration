'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Doctor = exports.User = undefined;

var _user = require('./user');

var user = _interopRequireWildcard(_user);

var _doctor = require('./doctor');

var doctor = _interopRequireWildcard(_doctor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.User = user;
exports.Doctor = doctor;