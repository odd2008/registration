'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _ioredis = require('ioredis');

var _ioredis2 = _interopRequireDefault(_ioredis);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * create at 2018-03-09 00:35:32
 * author by LXG
 */
var conf = require('../config');


var redis = new _ioredis2.default(_extends({}, conf.redis, {
  retryStrategy: function retryStrategy(times) {
    var delay = Math.min(times * 50, 2000);
    return delay;
  },
  reconnectOnError: function reconnectOnError(err) {
    var targetError = 'READONLY';
    if (err.message.slice(0, targetError.length) === targetError) {
      // Only reconnect when the error starts with "READONLY"
      return true; // or `return 1;`
    }
  }
}));

module.exports = redis;