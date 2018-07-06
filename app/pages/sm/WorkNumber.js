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

import { Sm as SmAction } from 'actions';

const styles = theme => ({

  root: {
    margin: '112px auto',
  },

  button: {
    margin: theme.spacing.unit,
  },

  progress: {
    margin: theme.spacing.unit * 2,
  },

});

class WorkNumber extends React.Component {

  state = {
    phone: '',
    second: 0,
  };

  componentDidMount() {
    this.props.fetchNumber();
  }

  handleConfirm = () => {
    const params = {
      number: this.props.data.number,
      name: 'xiaoxin',
    };

    this.props.confirmNumber(params);
  };

  render() {

    const {
      classes,
      data,
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

              <Button
                variant="raised"
                color="primary"
                disabled={!data.number}
                className={classes.button}
                onClick={this.handleConfirm}
              >
                确定
              </Button>

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
  //action
  fetchNumber: PropTypes.func.isRequired,
  confirmNumber: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.sm.data,
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
