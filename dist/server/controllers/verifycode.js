'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Created by songzhongkun on 2018/5/19.
 */

var SMSClient = require('@alicloud/sms-sdk');

var accessKeyId = 'LTAIORhBFLt764rt';
var secretAccessKey = '3C9WGAQ4enidiAaMaHFA6BWRJJ11OU';

//初始化sms_client
var smsClient = new SMSClient({ accessKeyId: accessKeyId, secretAccessKey: secretAccessKey });

module.exports = function (req, res, next) {
  var phone = req.body.phone;


  var code = [].concat(_toConsumableArray(new Array(6))).reduce(function (origin) {
    origin += Math.floor(Math.random() * 10);
    return origin;
  }, '');

  //发送短信
  smsClient.sendSMS({
    PhoneNumbers: phone,
    SignName: '坤坤嘅屋企',
    TemplateCode: 'SMS_135275133',
    TemplateParam: '{\'code\': \'' + code + '\'}'
  }).then(function (result) {
    res.json(result);
  }, function (err) {
    next(err);
  });
};