'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import Loadable from 'react-loadable';

import appRoot from './index';
import MainFrame from './MainFrame';

const loading = props => (props.error ? <div>PreLoad Javascirpt Error</div> : null);

loading.propTypes = {
  error : PropTypes.any,
};

if (typeof (require.ensure) !== 'function') {
  require.ensure = function (modules, callback) {
    callback(require);
  };
}

const Login = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/session/Login'),
  loading,
});

const User = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/user'),
  loading,
});

const Doctor = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/doctor'),
  loading,
});

const routes = [
  {
    component: appRoot,
    routes: [
      {
        path: '/login',
        exact : true,
        component: Login,
      },
      {
        component: MainFrame,
        routes: [
          {
            path: '/',
            exact : true,
            component: User,
          },
          {
            path: '/user',
            component: User,
          },
          {
            path: '/doctor',
            component: Doctor,
          },
        ],
      },
    ],
  },

];

export default routes;