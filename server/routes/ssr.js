import fs from 'fs';
import path from 'path';
import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import Loadable from 'react-loadable';
import {getBundles} from 'react-loadable/webpack';

import StaticRouter from 'react-router-dom/StaticRouter';
import {renderRoutes} from 'react-router-config';

import {JssProvider, SheetsRegistry} from 'react-jss';
import {create} from 'jss';
import {MuiThemeProvider, createMuiTheme, createGenerateClassName, jssPreset} from 'material-ui/styles';
import theme from 'theme';

import routes from 'routes';
import reducers from 'reducers';
import stats from 'public/react-loadable.json';

import {User as UserAction} from 'actions';

const router = express.Router();

let jsBundles =
  fs.existsSync(path.join(__dirname, '../public/react-loadable.json')) ?
    require('public/webpack-assets.json') : {
      vendor: {
        js: 'vendor.js',
      },
      lib: {
        js: 'lib.js',
      },
      client: {
        js: 'client.js',
      },
    };

//从前端路有配置中读取所有的routes的path，匹配到后端路由中去
const getAllPath = (function () {
  const routesPath = [];

  function _getPath(routes) {
    routes.map(route => {
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

}());


/*eslint-enable*/
router.get(getAllPath(routes), (req, res, next) => {
  let startRouteTime = new Date().getTime();
  console.log('start page route....', startRouteTime);
  const {url} = req;
  const store = createStore(reducers, applyMiddleware(thunk));

  if (url.match('api')) {
    return next();
  }
  // Create a sheetsRegistry instance.
  const sheetsRegistry = new SheetsRegistry();

  // Configure JSS
  const jss = create(jssPreset());
  jss.options.createGenerateClassName = createGenerateClassName;

  // preload data
  const promises = [];

  let userId = 0;
  // user session store
  if (req.session && req.session.user) {
    store.dispatch(UserAction.signinSuccess(req.session.user));
    userId = store.getState().user.data.userId;
  }

  let _async_fetch = true;

  return Promise.all(promises).then(() => {
    let context = {};
    let modules = [];
    const html = renderToString(
      <JssProvider registry={sheetsRegistry} jss={jss}>
        <MuiThemeProvider theme={createMuiTheme(theme)} sheetsManager={new Map()}>
          <Provider store={store}>
            <Loadable.Capture report={moduleName => modules.push(moduleName)}>
              <StaticRouter location={req.url} context={context}>
                {renderRoutes(routes)}
              </StaticRouter>
            </Loadable.Capture>
          </Provider>
        </MuiThemeProvider>
      </JssProvider>
    );

    let bundles = getBundles(stats, modules).map(bundle => bundle.file);

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
      _async_fetch,
      preloadedState: JSON.stringify(store.getState())
        .replace(/</g, '\\u003c')
        .replace(/\u2028/g, '\\u2028')
        .replace(/\u2029/g, '\\u2029'),
      css: sheetsRegistry.toString(),
      bundles: [jsBundles.vendor.js, jsBundles.lib.js, jsBundles.client.js, ...bundles],
      userId,
    });
  });
});


module.exports = router;