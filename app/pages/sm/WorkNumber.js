/**
 * Created by songzhongkun on 2018/7/6.
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { Sm as SmAction } from 'actions';

const styles = ({spacing}) => ({

  root: {
    margin: '112px auto',
    padding: spacing.unit,
  },

  button: {
    margin: spacing.unit,
  },

  textField: {
    marginLeft: spacing.unit,
    marginRight: spacing.unit,
    width: 200,
  },

  progress: {
    margin: spacing.unit * 2,
  },

});

class WorkNumber extends React.Component {

  state = {
    name: '',
  };

  componentDidMount() {
    this.props.fetchNumber();
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleConfirm = () => {
    const params = {
      number: this.props.data.number,
      name: this.state.name,
    };

    this.props.confirmNumber(params);
  };

  render() {

    const { name } = this.state;
    const {
      classes,
      data,
      confirmMsg,
      loading,
    } = this.props;

    return (
      <div className={classes.root}>
        {
          loading
            ? <CircularProgress className={classes.progress} size={50}/>
            : <React.Fragment>

              <Typography
                gutterBottom
                variant="display1"
              >
                {data.number ? '您的工号：' : '抱歉'}
              </Typography>

              <Typography
                gutterBottom
                variant="display4"
              >
                {data.number || '工号已取完！'}
              </Typography>

              <TextField
                id="phone"
                label="留下您的大名"
                value={name}
                className={classes.textField}
                onChange={this.handleChange}
                margin="normal"
              />

              <Button
                variant="raised"
                color="primary"
                disabled={!data.number || !name || confirmMsg.msg}
                className={classes.button}
                onClick={this.handleConfirm}
              >
                确定
              </Button>

              {
                confirmMsg.msg &&
                <div style={{ marginTop: 32 }}>
                  <Typography
                    gutterBottom
                    variant="display2"
                  >
                    {confirmMsg.msg}
                  </Typography>
                </div>
              }

            </React.Fragment>
        }
      </div>
    );
  }
}

WorkNumber.propTypes = {
  //style
  classes: PropTypes.object.isRequired,
  //data
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  confirmMsg: PropTypes.bool.isRequired,
  //action
  fetchNumber: PropTypes.func.isRequired,
  confirmNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.sm.data,
  confirmMsg: state.sm.confirmMsg,
  loading: state.sm.loading,
});

const mapDispatchToProps = {
  fetchNumber: SmAction.fetchNumber,
  confirmNumber: SmAction.confirmNumber,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(WorkNumber));
