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

var _reactRouterDom = require('react-router-dom');

var _styles = require('@material-ui/core/styles');

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require('@material-ui/icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _AccountCircle = require('@material-ui/icons/AccountCircle');

var _AccountCircle2 = _interopRequireDefault(_AccountCircle);

var _MenuItem = require('@material-ui/core/MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _Menu3 = require('@material-ui/core/Menu');

var _Menu4 = _interopRequireDefault(_Menu3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var drawerWidth = 240;

var styles = function styles(theme) {
  return {

    root: {
      flexGrow: 1,
      height: 430,
      zIndex: 1,
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      width: '100%'
    },

    appBar: _defineProperty({
      position: 'absolute',
      marginLeft: drawerWidth
    }, theme.breakpoints.up('md'), {
      width: 'calc(100% - ' + drawerWidth + 'px)'
    }),

    navIconHide: _defineProperty({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),

    toolbar: theme.mixins.toolbar,

    drawerPaper: _defineProperty({
      width: drawerWidth
    }, theme.breakpoints.up('md'), {
      position: 'relative'
    }),

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing.unit * 3
    }
  };
};

var Top = function (_React$Component) {
  _inherits(Top, _React$Component);

  function Top() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Top);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Top.__proto__ || Object.getPrototypeOf(Top)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      auth: true,
      anchorEl: null
    }, _this.handleMenu = function (event) {
      _this.setState({ anchorEl: event.currentTarget });
    }, _this.handleClose = function () {
      _this.setState({ anchorEl: null });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Top, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          auth = _state.auth,
          anchorEl = _state.anchorEl;

      var open = Boolean(anchorEl);

      return _react2.default.createElement(
        _AppBar2.default,
        { position: 'static' },
        _react2.default.createElement(
          _Toolbar2.default,
          null,
          _react2.default.createElement(
            _IconButton2.default,
            { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' },
            _react2.default.createElement(_Menu2.default, null)
          ),
          _react2.default.createElement(
            _Typography2.default,
            { variant: 'title', color: 'inherit', className: classes.flex },
            'Title'
          ),
          auth && _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _IconButton2.default,
              {
                'aria-owns': open ? 'menu-appbar' : null,
                'aria-haspopup': 'true',
                onClick: this.handleMenu,
                color: 'inherit'
              },
              _react2.default.createElement(_AccountCircle2.default, null)
            ),
            _react2.default.createElement(
              _Menu4.default,
              {
                id: 'menu-appbar',
                anchorEl: anchorEl,
                anchorOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'right'
                },
                open: open,
                onClose: this.handleClose
              },
              _react2.default.createElement(
                _MenuItem2.default,
                { onClick: this.handleClose },
                'Profile'
              ),
              _react2.default.createElement(
                _MenuItem2.default,
                { onClick: this.handleClose },
                'My account'
              )
            )
          )
        )
      );
    }
  }]);

  return Top;
}(_react2.default.Component);

Top.propTypes = {
  classes: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)((0, _reactRouterDom.withRouter)(Top)));