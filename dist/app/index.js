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

var _reactRouterConfig = require('react-router-config');

var _styles = require('@material-ui/core/styles');

var _Drawer = require('@material-ui/core/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _AppBar = require('@material-ui/core/AppBar');

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require('@material-ui/core/Toolbar');

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _List = require('@material-ui/core/List');

var _List2 = _interopRequireDefault(_List);

var _ListItem = require('@material-ui/core/ListItem');

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemIcon = require('@material-ui/core/ListItemIcon');

var _ListItemIcon2 = _interopRequireDefault(_ListItemIcon);

var _ListItemText = require('@material-ui/core/ListItemText');

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Divider = require('@material-ui/core/Divider');

var _Divider2 = _interopRequireDefault(_Divider);

var _Inbox = require('@material-ui/icons/Inbox');

var _Inbox2 = _interopRequireDefault(_Inbox);

var _Drafts = require('@material-ui/icons/Drafts');

var _Drafts2 = _interopRequireDefault(_Drafts);

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _IconButton = require('@material-ui/core/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Hidden = require('@material-ui/core/Hidden');

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Menu = require('@material-ui/icons/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

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
    },

    appName: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 16,
      padding: theme.spacing.unit * 2
    }

  };
};

var AppRoot = function (_React$Component) {
  _inherits(AppRoot, _React$Component);

  function AppRoot() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, AppRoot);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AppRoot.__proto__ || Object.getPrototypeOf(AppRoot)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      mobileOpen: false,
      menuName: '用户管理'
    }, _this.handleDrawerToggle = function () {
      _this.setState({ mobileOpen: !_this.state.mobileOpen });
    }, _this.toggleSubMenu = function (subMenu, url) {
      var history = _this.props.history;

      _this.setState({
        menuName: subMenu,
        mobileOpen: false
      }, function () {
        return history.push('/' + url);
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AppRoot, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme,
          route = _props.route;


      var drawer = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: classes.appName },
          '\u6302\u53F7\u52A0\u901F\u5668'
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(
          _List2.default,
          null,
          _react2.default.createElement(
            _ListItem2.default,
            { button: true, onClick: function onClick() {
                return _this2.toggleSubMenu('用户管理', 'user');
              } },
            _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              _react2.default.createElement(_Inbox2.default, null)
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: '\u7528\u6237\u7BA1\u7406' })
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { button: true, onClick: function onClick() {
                return _this2.toggleSubMenu('医生管理', 'doctor');
              } },
            _react2.default.createElement(
              _ListItemIcon2.default,
              null,
              _react2.default.createElement(_Drafts2.default, null)
            ),
            _react2.default.createElement(_ListItemText2.default, { primary: '\u533B\u751F\u7BA1\u7406' })
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _AppBar2.default,
          { className: classes.appBar },
          _react2.default.createElement(
            _Toolbar2.default,
            null,
            _react2.default.createElement(
              _IconButton2.default,
              {
                color: 'inherit',
                'aria-label': 'open drawer',
                onClick: this.handleDrawerToggle,
                className: classes.navIconHide
              },
              _react2.default.createElement(_Menu2.default, null)
            ),
            _react2.default.createElement(
              _Typography2.default,
              { variant: 'title', color: 'inherit', noWrap: true },
              this.state.menuName
            )
          )
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { mdUp: true },
          _react2.default.createElement(
            _Drawer2.default,
            {
              variant: 'temporary',
              anchor: theme.direction === 'rtl' ? 'right' : 'left',
              open: this.state.mobileOpen,
              onClose: this.handleDrawerToggle,
              classes: {
                paper: classes.drawerPaper
              },
              ModalProps: {
                keepMounted: true // Better open performance on mobile.
              }
            },
            drawer
          )
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { smDown: true, implementation: 'css' },
          _react2.default.createElement(
            _Drawer2.default,
            {
              variant: 'permanent',
              open: true,
              classes: {
                paper: classes.drawerPaper
              }
            },
            drawer
          )
        ),
        _react2.default.createElement(
          'main',
          { className: classes.content },
          _react2.default.createElement('div', { className: classes.toolbar }),
          (0, _reactRouterConfig.renderRoutes)(route.routes)
        )
      );
    }
  }]);

  return AppRoot;
}(_react2.default.Component);

AppRoot.propTypes = {
  classes: _propTypes2.default.object.isRequired,
  history: _propTypes2.default.object.isRequired,
  route: _propTypes2.default.object.isRequired,
  theme: _propTypes2.default.object.isRequired
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles, { withTheme: true })((0, _reactRouterDom.withRouter)(AppRoot)));