'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';



const styles = () => ({

  _root: {
    textAlign: 'center',
  },

});

class Home extends React.Component {

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

Home.propTypes = {
  //style
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Home)));