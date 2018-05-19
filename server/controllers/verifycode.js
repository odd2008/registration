/**
 * Created by songzhongkun on 2018/5/19.
 */

const SMSClient = require('@alicloud/sms-sdk');

const accessKeyId = 'LTAIORhBFLt764rt';
const secretAccessKey = '3C9WGAQ4enidiAaMaHFA6BWRJJ11OU';

//初始化sms_client
let smsClient = new SMSClient({accessKeyId, secretAccessKey});

module.exports = (req, res, next) => {

  const {phone} = req.body;

  const code = [...new Array(6)].reduce(origin => {
    origin += Math.floor(Math.random() * 10);
    return origin;
  }, '');

  //发送短信
  smsClient.sendSMS({
    PhoneNumbers: phone,
    SignName: '坤坤嘅屋企',
    TemplateCode: 'SMS_135275133',
    TemplateParam: `{'code': '${code}'}`
  }).then(result => {
    res.json(result);
  }, err => {
    next(err);
  });

};