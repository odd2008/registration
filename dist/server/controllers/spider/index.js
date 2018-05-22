'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Created by songzhongkun on 2018/5/17.
 */

var cheerio = require('cheerio');
var http = require('https');
var iconv = require('iconv-lite');

var basic = {
  '科室': 'department',
  '职务': 'position',
  '职称': 'title',
  '专长': 'specialty'
};

module.exports = function (req, res, next) {

  try {

    var id = req.params.id;
    var url = 'https://ss.bjmu.edu.cn/Html/Doctors/Main/Index_' + id + '.html';

    http.get(url, function (resp) {

      var chunks = [];

      resp.on('data', function (chunk) {
        chunks.push(chunk);
      });

      console.log(chunks.length);

      resp.on('end', function () {
        // console.log('end');

        //由于咱们发现此网页的编码格式为gb2312，所以需要对其进行转码，否则乱码
        var html = iconv.decode(Buffer.concat(chunks), 'utf-8');
        // console.log(html);

        var $ = cheerio.load(html, { decodeEntities: false });

        // 个人信息
        var summary = {};

        // 姓名
        summary.name = $('.title_all').text().trim();

        // 头像
        summary.avatar = $('.doct_img img').attr('src').trim();

        $('.doct_con').children('p').each(function (index, element) {
          var text = $(element).text().trim();
          if (text) {
            var arr = text.split('：');
            summary[basic[arr[0]]] = arr[1];
          }
        });

        // 简介
        var desc = [];
        $('.doct_Description').children('p').each(function (index, element) {
          var test = $(element).text().trim();
          test && desc.push(test);
        });
        summary.introduction = desc;

        // 出诊信息
        var visitsInfo = {};
        var visitsTime = [];
        $('.PCDisplay table tbody').children().not('.frist_tr').each(function (index, element) {
          visitsTime = [];
          $(element).children().each(function (sub_index, sub_element) {
            var text = $(sub_element).text().trim();
            if (text) {
              if (index == 0) {
                sub_index - 1 > 0 && visitsTime.push(_defineProperty({}, sub_index - 1, text));
              } else {
                sub_index > 0 && visitsTime.push(_defineProperty({}, sub_index, text));
              }
            }
          });
          var timeName = index == 0 ? 'am' : 'pm';
          visitsInfo[timeName] = visitsTime;
        });

        summary.visitsInfo = visitsInfo;

        res.json({
          code: '200',
          massage: '获取成功',
          data: summary
        });
      });
    });
  } catch (err) {
    next(err);
  }
};