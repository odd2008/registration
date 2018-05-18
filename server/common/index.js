/**
 * Created by songzhongkun on 2017/10/24.
 */

const moment = require('moment');

const common = {

  uuid(){
    return Math.random().toString(30).substring(2).substr(5, 10).toUpperCase();
  },

  hms(timestamp){
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }

    const t = new Date(timestamp);
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();

    hour = (hour < 10) ? ('0' + hour) : hour;
    minute = (minute < 10) ? ('0' + minute) : minute;
    second = (second < 10) ? ('0' + second) : second;

    return hour + ':' + minute + second;
  },

  time(timestamp){
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }

    const t = new Date(timestamp);
    let month = (t.getMonth() + 1);
    let day = t.getDate();
    let hour = t.getHours();
    let minute = t.getMinutes();
    let second = t.getSeconds();

    month = (month < 10) ? ('0' + month) : month;
    day = (day < 10) ? ('0' + day) : day;
    hour = (hour < 10) ? ('0' + hour) : hour;
    minute = (minute < 10) ? ('0' + minute) : minute;
    second = (second < 10) ? ('0' + second) : second;

    return month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  },

  ymdhms(timestamp) {
    if (timestamp === undefined) {
      timestamp = new Date().getTime();
    } else if (String(timestamp).length === 10) {
      timestamp = parseInt(timestamp + '000');
    }
    return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
  },

  getRequestIp(req){
    return (req.headers['x-forwarded-for']
      || req.ip || '').replace('::ffff:', '').split(',')[0];
  },

};

module.exports = common;