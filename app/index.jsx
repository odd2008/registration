'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

// import wx from 'weixin-js-sdk';
import {network} from 'utils';
import config from 'config';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => {

  const {unit} = theme.spacing;

  return {

    '@global': {

      html: {
        background: '#fafafa',
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        boxSizing: 'border-box',
      },

      '*, *:before, *:after': {
        boxSizing: 'inherit',
      },

      a: {
        textDecoration: 'none',
      },

      'html,body,#root': {
        height: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
        fontFamily: '"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;',
      },

      '#root': {
        [theme.breakpoints.down('xs')]: {
          paddingRight: 0,
        },
      },

      '.maxContent': {
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        padding: unit,
      },

      '.flex': {
        display: 'flex',
      },

      '.flexCenter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '.flexVerticalCenter': {
        display: 'flex',
        alignItems: 'center',
      },

      '.flexHorizontalCenter': {
        display: 'flex',
        justifyContent: 'center',
      },

      '.progress': {
        textAlign: 'center',
        height: unit * 80,
        lineHeight: `${unit * 80}px`,
      },

      '.noData': {
        textAlign: 'center',
        padding: unit * 20,
      },

    },

    root: {
      flexGrow: 1,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%',
    },

    toolbar: theme.mixins.toolbar,

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3,
    },

  };

};

class AppRoot extends React.Component {

  componentDidMount() {
    this.getAccessToken();
  }

  getAccessToken() {
    network
      .post(`${config.api_host}/wx/getConfig`, {url: global.location.href})
      .then(data => {
        global.wx.config({
          debug: false,////生产环境需要关闭debug模式
          appId: data.appId,//appId通过微信服务号后台查看
          timestamp: data.timestamp,//生成签名的时间戳
          nonceStr: data.nonceStr,//生成签名的随机字符串
          signature: data.signature,//签名
          jsApiList: [//需要调用的JS接口列表
            'checkJsApi',//判断当前客户端版本是否支持指定JS接口
            'onMenuShareTimeline',//分享给好友
            'onMenuShareAppMessage',//分享到朋友圈
          ],
        });
      })
      .catch(err => console.log(err));
  }

  render() {

    const {
      classes,
      route,
    } = this.props;

    return (
      <div className={classes.root}>

        {renderRoutes(route.routes)}

      </div>
    );
  }
}

AppRoot.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
};

export default withStyles(styles)(withRouter(AppRoot));