/**
 * create at 2018-03-09 00:35:32
 * author by LXG
 */
const conf = require('../config');
import Redis from 'ioredis';

const redis = new Redis({
  ...conf.redis,
  retryStrategy: function (times) {
    var delay = Math.min(times * 50, 2000);
    return delay;
  },
  reconnectOnError: function (err) {
    var targetError = 'READONLY';
    if (err.message.slice(0, targetError.length) === targetError) {
      // Only reconnect when the error starts with "READONLY"
      return true; // or `return 1;`
    }
  },
});


module.exports = redis;