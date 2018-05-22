/**
 * Created by songzhongkun on 2018/5/22.
 */

const moment = require('moment');
const mysql = require('../../persistent/mysql');

module.exports = (req, res, next) => {

  const {ref_id, name, phone, avatar, department, position, title, specialty, introduction} = req.body;
  const now = moment().format('YYYY-MM-DD HH:mm:ss');

  const add_sql = 'insert into doctor_info (ref_id, name, phone, avatar, department, position, title, specialty, introduction, create_time, update_time) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
  const add_sql_Params = [ref_id, name, phone, avatar, department, position, title, specialty, introduction, now, now];

  mysql.queryCms(add_sql, add_sql_Params)
    .then(result => {
      res.json({
        code: 200,
        message: '插入成功',
        data: result
      })
    })
    .then(err => next(err))

};