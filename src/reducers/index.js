/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import userInfo from './userInfo';
import formboard from './board';

const reducers = {
  home,
  formboard,
  userInfo,
  router,
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
