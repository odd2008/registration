'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({

  root: {
    // textAlign: 'center',
  },

  button: {
    margin: theme.spacing.unit,
  },

});

class Home extends React.Component {

  render() {

    const {classes, history} = this.props;

    return (
      <div className={classes.root}>

        <Button
          variant="raised"
          color="primary"
          className={classes.button}
          onClick={() => history.push('/doctor/add')}
        >
          添加医生
        </Button>

        <Typography noWrap>
          {'Welcome come to doctor list!'}
        </Typography>
      </div>
    );
  }
}

Home.propTypes = {
  //style
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Home)));