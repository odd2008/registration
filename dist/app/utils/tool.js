'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GAListener = exports.getFromObject = exports.formatImageUrl = undefined;

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var formatImageUrl = exports.formatImageUrl = function formatImageUrl(src) {
  var is_have_prefix = src.match(/\/\/goss(\d+)?\.vcg\.com/g);
  return is_have_prefix ? src : _config2.default.prefix.oss + src;
};

var getFromObject = exports.getFromObject = function getFromObject(obj, keyStr, defaultVal) {
  var val = defaultVal;
  var keyArr = typeof keyStr == 'string' ? keyStr.split('.') : [];
  keyArr.forEach(function (key) {
    val = obj[key];
    val && (obj = obj[key]);
  });
  return val ? val : defaultVal;
};

var GAListener = exports.GAListener = function GAListener(category, action, label, value) {
  var obj = { 'data-ga-hittype': 'event' };
  if (category) obj['data-ga-event-category'] = category;
  if (action) obj['data-ga-event-action'] = action;
  if (label) obj['data-ga-event-label'] = label;
  if (value) obj['data-ga-event-value'] = value;
  return obj;
};