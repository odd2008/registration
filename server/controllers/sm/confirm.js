/**
 * Created by songzhongkun on 2018/7/6.
 */
const moment = require('moment');
const mysql = require('../../persistent/mysql');

module.exports = (req, res, next) => {

  const { number, name } = req.body;

  const querySql = `select * from work_numbers where number = '${number}' and is_use = 1`;

  mysql.queryCms(querySql)
    .then(result => {
      const data = { msg: '' };
      const rows = JSON.parse(JSON.stringify(result));
      if (rows.length) {
        data.msg = '该号码已被占用，请刷新重试！';
        res.json(data);
      } else {
        const now = moment().format('YYYY-MM-DD');
        const updateSql = `update work_numbers set is_use = 1, name = '${name}' where number = '${number}' and creative_date = '${now}'`;
        mysql.queryCms(updateSql)
          .then(result => {
            const row = JSON.parse(JSON.stringify(result));
            if (row.changedRows == 1) {
              data.msg = '号码确认成功！';
            }
            res.json(data);
          })
      }
    })
    .catch(err => next(err));

};