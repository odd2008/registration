'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {renderRoutes} from 'react-router-config';

import {withStyles} from '@material-ui/core/styles';

const styles = theme => {

  const {unit} = theme.spacing;

  return {

    '@global': {

      html: {
        background: '#fafafa',
        WebkitFontSmoothing: 'antialiased', // Antialiasing.
        MozOsxFontSmoothing: 'grayscale', // Antialiasing.
        boxSizing: 'border-box',
      },

      '*, *:before, *:after': {
        boxSizing: 'inherit',
      },

      a: {
        textDecoration: 'none',
      },

      'html,body,#root': {
        height: '100%',
        minHeight: '100%',
        margin: 0,
        padding: 0,
        fontFamily: '"Helvetica Neue For Number", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;',
      },

      '#root': {
        paddingRight: unit * 4,
        [theme.breakpoints.down('xs')]: {
          paddingRight: 0,
        },
      },

      '.maxContent': {
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        padding: unit,
      },

      '.flex': {
        display: 'flex',
      },

      '.flexCenter': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },

      '.flexVerticalCenter': {
        display: 'flex',
        alignItems: 'center',
      },

      '.flexHorizontalCenter': {
        display: 'flex',
        justifyContent: 'center',
      },

      '.progress': {
        textAlign: 'center',
        height: unit * 80,
        lineHeight: `${unit * 80}px`,
      },

      '.noData': {
        textAlign: 'center',
        padding: unit * 20,
      },

    },

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

  };

};


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