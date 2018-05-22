'use strict';

/**
 * Created by songzhongkun on 2017/10/24.
 */

var moment = require('moment');

var common = {
  uuid: function uuid() {
    return Math.random().toString(30).substring(2).substr(5, 10).toUpperCase();
  },
  hms: function hms(timestamp) {
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }

    var t = new Date(timestamp);
    var hour = t.getHours();
    var minute = t.getMinutes();
    var second = t.getSeconds();

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return hour + ':' + minute + second;
  },
  time: function time(timestamp) {
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }

    var t = new Date(timestamp);
    var month = t.getMonth() + 1;
    var day = t.getDate();
    var hour = t.getHours();
    var minute = t.getMinutes();
    var second = t.getSeconds();

    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    return month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  },
  ymdhms: function ymdhms(timestamp) {
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  },
  getRequestIp: function getRequestIp(req) {
    return (req.headers['x-forwarded-for'] || req.ip || '').replace('::ffff:', '').split(',')[0];
  }
};

module.exports = common;