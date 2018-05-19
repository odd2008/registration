'use strict';

var _aliMns = require('ali-mns');

var _aliMns2 = _interopRequireDefault(_aliMns);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var aliMqAccount = new _aliMns2.default.Account(_config2.default.nms.accountId, _config2.default.nms.keyId, _config2.default.nms.keySecret);
var beijingRegion = new _aliMns2.default.Region(_aliMns2.default.City.Beijing, _config2.default.nms.region, 'cn');
var mq = new _aliMns2.default.MQ(_config2.default.nms.mgName, aliMqAccount, beijingRegion);

module.exports.aliMQ = mq;