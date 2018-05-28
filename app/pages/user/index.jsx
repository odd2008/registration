'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';

import {network} from 'utils';
import config from 'config';

const styles = () => ({

  _root: {
    textAlign: 'center',
  },

});

class User extends React.Component {

  componentDidMount() {

    network
      .get(`${config.api_host}/wx/getConfig`, {url: global.location.href})
      .then(data => {

        global.wx.config({
          debug: config.debug,////生产环境需要关闭debug模式
          appId: data.appId,//appId通过微信服务号后台查看
          timestamp: data.timestamp,//生成签名的时间戳
          nonceStr: data.nonceStr,//生成签名的随机字符串
          signature: data.signature,//签名
          jsApiList: [//需要调用的JS接口列表
            'checkJsApi',//判断当前客户端版本是否支持指定JS接口
            'onMenuShareAppMessage',//分享给好友
            'onMenuShareTimeline',//分享到朋友圈
          ],
        });

        global.wx.checkJsApi({

          jsApiList: ['onMenuShareAppMessage', 'onMenuShareTimeline'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
          success: function (res) {
            // 以键值对的形式返回，可用的api值true，不可用为false
            // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
            console.log('check', res);
          },

        });

        global.wx.ready(function () {

          global.wx.onMenuShareAppMessage({
            title: '用户管理', // 分享标题
            desc: '朋友分享测试', // 分享描述
            link: global.location.href.split('#')[0], // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
            imgUrl: 'http://songzhongkun.com/program_ape.jpg', // 分享图标
            type: 'link', // 分享类型,music、video或link，不填默认为link
            success: function () {
              console.log('// 用户点击了分享朋友后执行的回调函数');
            },
          });

          global.wx.onMenuShareTimeline({
            title: '用户管理',
            desc: '朋友圈分享测试',
            link: global.location.href.split('#')[0],
            imgUrl: 'https://www.easyicon.net/api/resizeApi.php?id=556260&size=128',
            success: function () {
              console.log('// 用户点击了分享朋友圈后执行的回调函数');
            },
          });

          global.wx.error(function (res) {
            console.log(res);
          });

        });

      })
      .catch(err => console.log(err));
  }


  handleShare = () => {
    global.wx.onMenuShareAppMessage({
      title: '用户管理', // 分享标题
      desc: '测试用户管理分享', // 分享描述
      link: global.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
      imgUrl: 'https://www.easyicon.net/api/resizeApi.php?id=556260&size=128', // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        console.log('// 用户点击了分享后执行的回调函数 user ');
      },
    });
  };

  render() {

    const {classes} = this.props;

    return (
      <div className={classes._root}>

        <ShareIcon
          style={{cursor: 'pointer'}}
          onClick={() => this.handleShare()}
        />

        <Typography noWrap>
          {'Welcome come to user list !!!'}
        </Typography>
      </div>
    );
  }
}

User.propTypes = {
  //style
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(User)));