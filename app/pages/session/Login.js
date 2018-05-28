/**
 * Created by songzhongkun on 2018/5/19.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {User as UserAction} from 'actions';

const styles = theme => ({

  root: {
    // height: 500,
    // border: '1px solid blue',
    // width: 450,
    margin: '112px auto',
  },

  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },

  button: {
    margin: theme.spacing.unit,
  },

});

class Login extends React.Component {

  state = {
    phone: '',
    second: 0,
  };

  handleChange = event => {

    let phone = event.target.value;
    phone = phone.replace(/\D+/g, '');
    phone.charAt(0) != 1 && (phone = '');
    phone.length > 11 && (phone = phone.substring(0, 11));

    this.setState({phone});
  };

  handleVerifyCode = () => {

    this.props.getVerifyCode(this.state.phone);

    let second = 60;
    const interval = setInterval(() => {
      second--;
      this.setState({second});
      if (second == 0) clearInterval(interval);
    }, 1000);

  };

  render() {

    const {classes} = this.props;

    const {
      phone,
      second,
    } = this.state;

    return (
      <div className={classes.root}>

        <TextField
          id="phone"
          label="phone"
          className={classes.textField}
          value={phone}
          onChange={this.handleChange}
          margin="normal"
        />

        <Button
          variant="raised"
          color="primary"
          disabled={second > 0}
          className={classes.button}
          onClick={this.handleVerifyCode}
        >
          {second > 0 ? second : '获取验证码'}
        </Button>

      </div>
    );
  }
}

Login.propTypes = {
  //style
  classes: PropTypes.object.isRequired,

  getVerifyCode: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  getVerifyCode: UserAction.getVerifyCode,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Login)));