'use strict';

var _redis = require('../persistent/redis');

var _redis2 = _interopRequireDefault(_redis);

var _utils = require('../../app/utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 暂时调用 1.0 网站的API SERVER 接口，校验用户是否登陆
 * author by LXG
 */
module.exports = function (req, res, next) {
  var api_token = req.cookies.api_token;
  if (api_token) {
    return _redis2.default.get(api_token).then(function (result) {
      var userInfo = {};
      try {
        if (result && typeof result == 'string') userInfo = JSON.parse(result);
      } catch (e) {
        userInfo = {};
      }

      !userInfo.status ? req.session && req.session.destroy(function (err) {
        if (err) return next(new Error({ code: -1, message: '退出登录失败' }));
      }) : req.session.user = {
        userId: userInfo.data.uid,
        userName: userInfo.data.username,
        realName: userInfo.data.display_name || userInfo.data.username || userInfo.data.mobile || userInfo.data.email,
        token: userInfo.data.token,
        mobile: userInfo.data.mobile,
        userSeller: req.cookies.user_seller,
        accountName: req.cookies.account_name,
        paUser: userInfo.data.paUser,
        paPackageId: userInfo.data.paPackageId,
        sellerMobile: userInfo.data.sellerMobile,
        isAdmin: userInfo.data.isAdmin
      };

      return next();
    }).catch(function (e) {

      return next(e);
    });
  } else {
    req.session && req.session.destroy(function (err) {
      if (err) return next(new Error({ code: -1, message: '退出登录失败' }));
    });

    return next();
  }
};