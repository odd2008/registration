'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactLoadable = require('react-loadable');

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = require('react-loadable/webpack');

var _StaticRouter = require('react-router-dom/StaticRouter');

var _StaticRouter2 = _interopRequireDefault(_StaticRouter);

var _reactRouterConfig = require('react-router-config');

var _reactJss = require('react-jss');

var _jss = require('jss');

var _styles = require('material-ui/styles');

var _theme = require('../../app/theme');

var _theme2 = _interopRequireDefault(_theme);

var _routes = require('../../app/routes');

var _routes2 = _interopRequireDefault(_routes);

var _reducers = require('../../app/reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _reactLoadable3 = require('../public/react-loadable.json');

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _actions = require('../../app/actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var router = _express2.default.Router();

var jsBundles = _fs2.default.existsSync(_path2.default.join(__dirname, '../public/react-loadable.json')) ? require('../public/webpack-assets.json') : {
  vendor: {
    js: 'vendor.js'
  },
  lib: {
    js: 'lib.js'
  },
  client: {
    js: 'client.js'
  }
};

//从前端路有配置中读取所有的routes的path，匹配到后端路由中去
var getAllPath = function () {
  var routesPath = [];

  function _getPath(routes) {
    routes.map(function (route) {
      if (route.path) {
        routesPath.push(route.path);
      }
      if (route.routes) {
        _getPath(route.routes);
      }
    });
  }

  return function (routes) {
    _getPath(routes);
    return routesPath;
  };
}();

/*eslint-enable*/
router.get(getAllPath(_routes2.default), function (req, res, next) {
  var startRouteTime = new Date().getTime();
  console.log('start page route....', startRouteTime);
  var url = req.url;

  var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));

  if (url.match('api')) {
    return next();
  }
  // Create a sheetsRegistry instance.
  var sheetsRegistry = new _reactJss.SheetsRegistry();

  // Configure JSS
  var jss = (0, _jss.create)((0, _styles.jssPreset)());
  jss.options.createGenerateClassName = _styles.createGenerateClassName;

  // preload data
  var promises = [];

  var userId = 0;
  // user session store
  if (req.session && req.session.user) {
    store.dispatch(_actions.User.signinSuccess(req.session.user));
    userId = store.getState().user.data.userId;
  }

  var _async_fetch = true;

  return Promise.all(promises).then(function () {
    var context = {};
    var modules = [];
    var html = (0, _server.renderToString)(_react2.default.createElement(
      _reactJss.JssProvider,
      { registry: sheetsRegistry, jss: jss },
      _react2.default.createElement(
        _styles.MuiThemeProvider,
        { theme: (0, _styles.createMuiTheme)(_theme2.default), sheetsManager: new Map() },
        _react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(
            _reactLoadable2.default.Capture,
            { report: function report(moduleName) {
                return modules.push(moduleName);
              } },
            _react2.default.createElement(
              _StaticRouter2.default,
              { location: req.url, context: context },
              (0, _reactRouterConfig.renderRoutes)(_routes2.default)
            )
          )
        )
      )
    ));

    var bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules).map(function (bundle) {
      return bundle.file;
    });

    if (context.status === 404) {
      res.status(404);
    }
    if (context.status === 302) {
      return res.redirect(302, context.url);
    }
    console.log('endRouteTime', (new Date().getTime() - startRouteTime) / 1000);

    //TODO:禁止服务端渲染
    res.render('index', {
      html: process.env.NODE_ENV == 'production' ? html : '',
      _async_fetch: _async_fetch,
      preloadedState: JSON.stringify(store.getState()).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029'),
      css: sheetsRegistry.toString(),
      bundles: [jsBundles.vendor.js, jsBundles.lib.js, jsBundles.client.js].concat(_toConsumableArray(bundles)),
      userId: userId
    });
  });
});

module.exports = router;