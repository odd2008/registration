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

const Number = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/sm/WorkNumber'),
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

const AddDoctor = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/doctor/add'),
  loading,
});

const Patient = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/patient'),
  loading,
});


const Pay = Loadable({
  loader : () => import( /* webpackChunkName: 'home' */ './pages/pay'),
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
        path: '/number',
        exact : true,
        component: Number,
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
            exact : true,
            component: Doctor,
          },
          {
            path: '/doctor/add',
            component: AddDoctor,
          },
          {
            path: '/patient',
            exact : true,
            component: Patient,
          },
          {
            path: '/pay',
            exact : true,
            component: Pay,
          },
        ],
      },
    ],
  },

];

export default routes;