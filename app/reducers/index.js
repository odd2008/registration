'use strict';

import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import {reducer as form} from 'redux-form';

import user from './user';
import patient from './patient';

const rootReducer = combineReducers({
  router: routerReducer,
  form,
  user,
  patient,
});

export default rootReducer;