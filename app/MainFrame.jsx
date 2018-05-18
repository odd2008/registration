'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {renderRoutes} from 'react-router-config';

import {withStyles} from 'material-ui/styles';

import Top from 'components/Top';

const styles = theme => ({

  frame: {
    width: '100%',
    // display: 'flex',
    minHeight: 'calc(100% - 400px)',
  },

  content: {
    width: '100%',
    padding: theme.overrides.MuiToolbar.root.height,
    backgroundColor: '#fff',
  },

});

class MainFrame extends React.Component {

  render() {

    const {
      classes,
      route,
    } = this.props;

    return (
      <div className={classes.frame}>

        <Top/>

        <div className={classes.content}>
          {renderRoutes(route.routes)}
        </div>

      </div>
    );
  }
}

MainFrame.propTypes = {
  route: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MainFrame));