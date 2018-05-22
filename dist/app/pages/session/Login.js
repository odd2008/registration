/**
 * Created by songzhongkun on 2018/5/19.
 */
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

var _styles = require('material-ui/styles');

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(theme) {
  return {

    root: {
      // height: 500,
      // border: '1px solid blue',
      // width: 450,
      margin: '112px auto'
    },

    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200
    },

    button: {
      margin: theme.spacing.unit
    }

  };
};

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      phone: '',
      second: 0
    }, _this.handleChange = function (event) {

      var phone = event.target.value;
      phone = phone.replace(/\D+/g, '');
      phone.charAt(0) != 1 && (phone = '');
      phone.length > 11 && (phone = phone.substring(0, 11));

      _this.setState({ phone: phone });
    }, _this.handleVerifyCode = function () {

      _this.props.getVerifyCode(_this.state.phone);

      var second = 60;
      var interval = setInterval(function () {
        second--;
        _this.setState({ second: second });
        if (second == 0) clearInterval(interval);
      }, 1000);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          phone = _state.phone,
          second = _state.second;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(_TextField2.default, {
          id: 'phone',
          label: 'phone',
          className: classes.textField,
          value: phone,
          onChange: this.handleChange,
          margin: 'normal'
        }),
        _react2.default.createElement(
          _Button2.default,
          {
            variant: 'raised',
            color: 'primary',
            disabled: second > 0,
            className: classes.button,
            onClick: this.handleVerifyCode
          },
          second > 0 ? second : '获取验证码'
        )
      );
    }
  }]);

  return Login;
}(_react2.default.Component);

Login.propTypes = {
  //style
  classes: _propTypes2.default.object.isRequired,

  getVerifyCode: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {
  getVerifyCode: _actions.User.getVerifyCode
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)((0, _reactRouterDom.withRouter)(Login)));