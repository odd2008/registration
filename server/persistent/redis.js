/**
 * create at 2018-03-09 00:35:32
 * author by LXG
 */
const conf = require('../config');
const Redis = require('ioredis');

const redis = new Redis({

  ...conf.redis,

  retryStrategy: times => Math.min(times * 50, 2000),

  reconnectOnError: err => {
    if (err.message.slice(0, targetError.length) === 'READONLY') {
      return true; // or `return 1;`
    }
  },

});


module.exports = redis;