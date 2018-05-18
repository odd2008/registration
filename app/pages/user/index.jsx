'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from 'material-ui/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({

  root: {
    textAlign: 'center',
  },

});

class Home extends React.Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.root}>
        <Typography noWrap>
          {'Welcome come to user list!'}
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