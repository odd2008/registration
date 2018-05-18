'use strict';

import 'cropperjs/dist/cropper.css';
import 'video-react/dist/video-react.css'; // import css

//兼容性
import 'babel-polyfill';

import React from 'react';
import {hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import Loadable from 'react-loadable';
import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
//import {createLogger} from 'redux-logger';
import rootReducer from 'reducers';
import {renderRoutes} from 'react-router-config';
import {BrowserRouter} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import {routerMiddleware} from 'react-router-redux';

import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import CssBaseline from 'material-ui/CssBaseline';
import moment from 'moment';
import theme from 'theme';
import routes from 'app/routes';

import config from 'config';

moment.locale(config.date.locale);
moment.defaultFormat = config.date.format.full;

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
//const loggerMiddleware = createLogger();

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

let store;
if (!(window.__REDUX_DEVTOOLS_EXTENSION__ || window.__REDUX_DEVTOOLS_EXTENSION__)) {
  store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      routeMiddleware,
      thunkMiddleware,
      //loggerMiddleware
    )
  );
} else {
  store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(
        routeMiddleware,
        thunkMiddleware,
        // loggerMiddleware
      ), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}

const App = () => (
  <MuiThemeProvider theme={createMuiTheme(theme)}>
    <CssBaseline />
    <Provider store={store}>
      <BrowserRouter>
        {renderRoutes(routes)}
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);

window.main = () => {
  Loadable.preloadReady().then(() => {
    hydrate(<App/>, document.getElementById('root'), () => {
      const ssStyles = document.getElementById('jss-server-side');
      ssStyles.parentNode.removeChild(ssStyles);
    });
    window._ASYNC_FETCH = true;
  });
};