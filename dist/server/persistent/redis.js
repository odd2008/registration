'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * create at 2018-03-09 00:35:32
 * author by LXG
 */
var conf = require('../config');
var Redis = require('ioredis');

var redis = new Redis(_extends({}, conf.redis, {

  retryStrategy: function retryStrategy(times) {
    return Math.min(times * 50, 2000);
  },

  reconnectOnError: function reconnectOnError(err) {
    if (err.message.slice(0, targetError.length) === 'READONLY') {
      return true; // or `return 1;`
    }
  }

}));

module.exports = redis;