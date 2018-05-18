/**
 * 暂时调用 1.0 网站的API SERVER 接口，校验用户是否登陆
 * author by LXG
 */
import redis from '../persistent/redis';
import {network} from 'utils';

module.exports = function (req, res, next) {
  let api_token = req.cookies.api_token;
  if(api_token){
    return redis.get(api_token).then(function (result) { 
      let userInfo = {};
      try{
        if(result && typeof result == 'string') userInfo = JSON.parse(result);
      }catch(e){
        userInfo = {};
      }

      !userInfo.status ?
        req.session && req.session.destroy(err => {
          if (err) return next(new Error({ code: -1, message: '退出登录失败' }));
        })
        : req.session.user = {
          userId: userInfo.data.uid,
          userName: userInfo.data.username,
          realName : userInfo.data.display_name || userInfo.data.username || userInfo.data.mobile || userInfo.data.email,
          token: userInfo.data.token,
          mobile: userInfo.data.mobile,
          userSeller : req.cookies.user_seller,
          accountName : req.cookies.account_name,
          paUser : userInfo.data.paUser,
          paPackageId : userInfo.data.paPackageId,
          sellerMobile: userInfo.data.sellerMobile,
          isAdmin: userInfo.data.isAdmin,
        };

      return next();
    }).catch(e => {

      return next(e);
    });
  }else{
    req.session && req.session.destroy(err => {
      if (err) return next(new Error({ code: -1, message: '退出登录失败' }));
    });
    
    return next();
  }
};