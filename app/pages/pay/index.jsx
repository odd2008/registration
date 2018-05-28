'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = () => ({

  _root: {
    textAlign: 'center',
  },

});

class Pay extends React.Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes._root}>
        <Typography noWrap>
          {'Welcome come to pay list !!!'}
        </Typography>
      </div>
    );
  }
}

Pay.propTypes = {
  //style
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(withRouter(Pay)));