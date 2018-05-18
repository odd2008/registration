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

const Home = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/home'),
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
        path: '/',
        exact : true,
        component: User,
      },
      {
        path: '/user',
        exact : true,
        component: User,
      },
      {
        path: '/doctor',
        exact : true,
        component: Doctor,
      },
      {
        component: MainFrame,
        routes: [
          {
            path: '/home',
            exact: true,
            component: Home,
          },
        ],
      },
    ],
  },

];

export default routes;