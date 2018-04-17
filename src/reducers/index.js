/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import formboard from './board';

const reducers = {
  home,
  formboard,
  router,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
