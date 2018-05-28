'use strict';

import React from 'react';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';

const styles = ({spacing: {unit}}) => ({
  root: {
    fontSize: 12,
    color: '#6f6f6f',
    background: '#fff',
    padding: unit * 4,
    textAlign: 'center',
  },
});

const Footer = ({classes}) => (

  <div className={classes.root}>

    Footer

  </div>
);

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);