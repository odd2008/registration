/**
 * Created by songzhongkun on 2018/5/19.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import {User as UserAction} from 'actions';

const styles = theme => ({

  root: {
    height: 500,
    border: '1px solid blue',
    width: 450,
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
    phone: '18510381039',
  };

  handleChange = event => {
    this.setState({
      phone: event.target.value,
    });
  };

  handleVerifyCode = () => {
    this.props.getVerifyCode(this.state.phone);
  };

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>

        <TextField
          id="phone"
          label="phone"
          className={classes.textField}
          value={this.state.phone}
          onChange={this.handleChange}
          margin="normal"
        />

        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={this.handleVerifyCode}
        >
          获取验证码
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