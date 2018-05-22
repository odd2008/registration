'use strict';

/**
 * Created by songzhongkun on 2018/5/22.
 */

var moment = require('moment');
var mysql = require('../../persistent/mysql');

module.exports = function (req, res, next) {
  var _req$body = req.body,
      ref_id = _req$body.ref_id,
      name = _req$body.name,
      phone = _req$body.phone,
      avatar = _req$body.avatar,
      department = _req$body.department,
      position = _req$body.position,
      title = _req$body.title,
      specialty = _req$body.specialty,
      introduction = _req$body.introduction;

  var now = moment().format('YYYY-MM-DD HH:mm:ss');

  var add_sql = 'insert into doctor_info (ref_id, name, phone, avatar, department, position, title, specialty, introduction, create_time, update_time) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  var add_sql_Params = [ref_id, name, phone, avatar, department, position, title, specialty, introduction, now, now];

  mysql.queryCms(add_sql, add_sql_Params).then(function (result) {
    res.json({
      code: 200,
      message: '插入成功',
      data: result
    });
  }).then(function (err) {
    return next(err);
  });
};