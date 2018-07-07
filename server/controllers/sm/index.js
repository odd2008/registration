/**
 * Created by songzhongkun on 2018/7/6.
 */
const moment = require('moment');
const mysql = require('../../persistent/mysql');

module.exports = (req, res, next) => {

  const now = moment().format('YYYY-MM-DD');
  const sql =  `select * from work_numbers where is_use = 0 and creative_date = '${now}' limit 1`;

  mysql.queryCms(sql)
    .then(result => {
      const data = {};
      const rows = JSON.parse(JSON.stringify(result));
      rows.length && (data.number = rows[0].number);
      res.json(data);
    })
    .catch(err => next(err));

};