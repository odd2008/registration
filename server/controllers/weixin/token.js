/**
 * Created by songzhongkun on 2018/5/25.
 */
const sha1 = require('sha1');
const basic = require('../../config/basic');

module.exports = (req, res, next) => {

  const {signature, echostr, timestamp, nonce} = req.query;
  const token = basic.token;
  const sha = sha1([token, timestamp, nonce].sort().join(''));

  if (sha == signature) {
    res.send(echostr);
  }else{
    res.send('err');
  }

};