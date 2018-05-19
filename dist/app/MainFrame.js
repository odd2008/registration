'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactRouterConfig = require('react-router-config');

var _styles = require('material-ui/styles');

var _Top = require('./components/Top');

var _Top2 = _interopRequireDefault(_Top);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {

    frame: {
      width: '100%',
      // display: 'flex',
      minHeight: 'calc(100% - 400px)'
    },

    content: {
      width: '100%',
      padding: theme.overrides.MuiToolbar.root.height,
      backgroundColor: '#fff'
    }

  };
};

var MainFrame = function (_React$Component) {
  _inherits(MainFrame, _React$Component);

  function MainFrame() {
    _classCallCheck(this, MainFrame);

    return _possibleConstructorReturn(this, (MainFrame.__proto__ || Object.getPrototypeOf(MainFrame)).apply(this, arguments));
  }

  _createClass(MainFrame, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          route = _props.route;


      return _react2.default.createElement(
        'div',
        { className: classes.frame },
        _react2.default.createElement(_Top2.default, null),
        _react2.default.createElement(
          'div',
          { className: classes.content },
          (0, _reactRouterConfig.renderRoutes)(route.routes)
        )
      );
    }
  }]);

  return MainFrame;
}(_react2.default.Component);

MainFrame.propTypes = {
  route: _propTypes2.default.object.isRequired,
  classes: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)(MainFrame));