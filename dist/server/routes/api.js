'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _responseTime = require('response-time');

var _responseTime2 = _interopRequireDefault(_responseTime);

var _controllers = require('../controllers');

var _controllers2 = _interopRequireDefault(_controllers);

var _middleware = require('../middleware');

var _middleware2 = _interopRequireDefault(_middleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('API:' + req.url + ',API-TIME-START:' + new Date());
  next();
});

router.use((0, _responseTime2.default)(function (req, res, time) {
  console.log('APIMETHOD : ' + req.method + ' : ' + req.url + ' : ' + time);
}));

router.get('/spider/:id', _controllers2.default.spider.index);

module.exports = router;