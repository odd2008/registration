'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({

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

});


class AppRoot extends React.Component {

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