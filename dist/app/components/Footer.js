'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require('material-ui/styles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = function styles(_ref) {
  var unit = _ref.spacing.unit;
  return {
    root: {
      fontSize: 12,
      color: '#6f6f6f',
      background: '#fff',
      padding: unit * 4,
      textAlign: 'center'
    }
  };
};

var Footer = function Footer(_ref2) {
  var classes = _ref2.classes;
  return _react2.default.createElement(
    'div',
    { className: classes.root },
    'Footer'
  );
};

Footer.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(Footer);