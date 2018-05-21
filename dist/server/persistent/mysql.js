'use strict';

var mysql = require('mysql');
var conf = require('../config');

var cms = mysql.createPool(conf.mysql.cms);

function getCmsConncetion() {
  return new Promise(function (resolve, reject) {
    cms.getConnection(function (err, connection) {
      if (err) reject(err);else resolve(connection);
    });
  });
}

function queryCms(statement, params) {
  return new Promise(function (resolve, reject) {
    getCmsConncetion().then(function (connection) {
      connection.query(statement.replace(/\s{1,}/g, ' '), params, function (err, result) {
        connection.release();
        if (err) reject(err);else resolve(result);
      });
    });
  });
}

module.exports.queryCms = queryCms;