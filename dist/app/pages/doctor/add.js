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

var _Typography = require('@material-ui/core/Typography');

var _Typography2 = _interopRequireDefault(_Typography);

var _TextField = require('@material-ui/core/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _Button = require('@material-ui/core/Button');

var _Button2 = _interopRequireDefault(_Button);

var _CircularProgress = require('@material-ui/core/CircularProgress');

var _CircularProgress2 = _interopRequireDefault(_CircularProgress);

var _config = require('../../config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('../../utils');

var _actions = require('../../actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = function styles(_ref) {
  var unit = _ref.spacing.unit;
  return {

    root: {
      // textAlign: 'center',
    },

    infoBox: {
      margin: unit * 2
    },

    textField: {
      marginLeft: unit,
      marginRight: unit
    },

    button: {
      margin: unit
    },

    progress: {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      zIndex: 2500,
      top: 0,
      left: 0,
      background: 'rgba(0,0,0, 0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },

    avatar: {
      width: 200,
      height: 200,
      borderRadius: 100,
      background: 'gainsboro'
    },

    basic: {
      marginTop: unit
    },

    introductionBox: {
      marginTop: unit * 4
    },

    introduction: {
      marginTop: unit * 2
    }

  };
};

var AddDoctor = function (_React$Component) {
  _inherits(AddDoctor, _React$Component);

  function AddDoctor() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, AddDoctor);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = AddDoctor.__proto__ || Object.getPrototypeOf(AddDoctor)).call.apply(_ref2, [this].concat(args))), _this), _this.state = {
      ref_id: '',
      loading: false,
      doctor: {}
    }, _this.handleChange = function (name) {
      return function (event) {
        var value = event.target.value;
        if (name == 'ref_id') {
          value = value.replace(/\D+/g, '');
          _this.setState(_defineProperty({}, name, value));
        } else {
          var doctor = _this.state.doctor;

          doctor[name] = value;
          _this.setState({ doctor: doctor });
        }
      };
    }, _this.handleSpider = function () {
      _this.setState({ loading: true }, function () {
        _utils.network.get(_config2.default.api_host + '/spider/' + _this.state.ref_id).then(function (res) {
          if (res.code == 200) {
            _this.setState({ doctor: res.data, loading: false });
          }
        }).catch(function (err) {
          _this.setState({ loading: false });
          console.log(err);
        });
      });
    }, _this.handleAddDoctor = function () {
      var params = Object.assign({}, _this.state.doctor);
      params.ref_id = _this.state.ref_id;
      params.introduction = JSON.stringify(params.introduction);
      params.visitsInfo = JSON.stringify(params.visitsInfo);

      _this.props.addDoctor(params);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(AddDoctor, [{
    key: 'render',
    value: function render() {
      var classes = this.props.classes;
      var _state = this.state,
          ref_id = _state.ref_id,
          doctor = _state.doctor,
          loading = _state.loading;


      return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
          _Typography2.default,
          { noWrap: true },
          '\u6DFB\u52A0\u533B\u751F'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_TextField2.default, {
            id: 'phone',
            label: '\u8F93\u5165\u533B\u751F\u6807\u8BC6',
            value: ref_id,
            className: classes.textField,
            onChange: this.handleChange('ref_id'),
            margin: 'normal'
          }),
          _react2.default.createElement(
            _Button2.default,
            {
              variant: 'raised',
              color: 'primary',
              disabled: !ref_id,
              className: classes.button,
              onClick: this.handleSpider
            },
            '\u83B7\u53D6\u4FE1\u606F'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: classes.infoBox },
          _react2.default.createElement('img', {
            className: classes.avatar,
            src: doctor.avatar ? 'https://ss.bjmu.edu.cn' + doctor.avatar : ''
          }),
          _react2.default.createElement(
            'div',
            { className: classes.basic },
            _react2.default.createElement(_TextField2.default, {
              id: 'name',
              label: '\u59D3\u540D',
              value: doctor.name || '',
              className: classes.textField,
              margin: 'normal',
              onChange: this.handleChange('name')
            }),
            _react2.default.createElement(_TextField2.default, {
              id: 'phone',
              label: '\u7535\u8BDD',
              value: doctor.phone || '',
              className: classes.textField,
              margin: 'normal',
              onChange: this.handleChange('phone')
            }),
            _react2.default.createElement(_TextField2.default, {
              id: 'department',
              label: '\u79D1\u5BA4',
              value: doctor.department || '',
              className: classes.textField,
              margin: 'normal',
              onChange: this.handleChange('department')
            }),
            _react2.default.createElement(_TextField2.default, {
              id: 'position',
              label: '\u804C\u52A1',
              value: doctor.position || '',
              className: classes.textField,
              margin: 'normal',
              onChange: this.handleChange('position')
            }),
            _react2.default.createElement(_TextField2.default, {
              id: 'title',
              label: '\u804C\u79F0',
              value: doctor.title || '',
              className: classes.textField,
              margin: 'normal',
              onChange: this.handleChange('title')
            }),
            _react2.default.createElement(_TextField2.default, {
              fullWidth: true,
              id: 'specialty',
              label: '\u4E13\u957F',
              value: doctor.specialty || '',
              className: classes.textField,
              onChange: this.handleChange('specialty')
            })
          ),
          _react2.default.createElement(
            'div',
            { className: classes.introductionBox },
            '\u4E2A\u4EBA\u7B80\u4ECB',
            _react2.default.createElement(
              'div',
              { className: classes.introduction },
              (doctor.introduction || []).map(function (item) {
                return _react2.default.createElement(
                  'div',
                  { key: item },
                  item
                );
              })
            )
          ),
          _react2.default.createElement(
            _Button2.default,
            {
              variant: 'raised',
              color: 'primary',
              disabled: !doctor,
              className: classes.button,
              onClick: this.handleAddDoctor
            },
            '\u63D2\u5165\u6570\u636E\u5E93'
          )
        ),
        loading && _react2.default.createElement(
          'div',
          { className: classes.progress },
          _react2.default.createElement(_CircularProgress2.default, { size: 50 })
        )
      );
    }
  }]);

  return AddDoctor;
}(_react2.default.Component);

AddDoctor.propTypes = {
  //style
  classes: _propTypes2.default.object.isRequired,

  addDoctor: _propTypes2.default.func.isRequired
};

var mapStateToProps = function mapStateToProps() {
  return {};
};

var mapDispatchToProps = {
  addDoctor: _actions.Doctor.addDoctor
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _styles.withStyles)(styles)((0, _reactRouterDom.withRouter)(AddDoctor)));