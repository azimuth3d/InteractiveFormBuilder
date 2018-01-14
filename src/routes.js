/* @flow */

import type { Dispatch } from './types';
import { fetchUsersIfNeeded } from './actions/users';
import { fetchUserIfNeeded } from './actions/user';
import HomePage from './containers/Home';
import UserInfoPage from './containers/UserInfo';
import NotFoundPage from './containers/NotFound';
import FormBoard from './containers/BoardContainer';

export default [
  {
    path: '/save',
    exact: true,
    component: HomePage, // Add your route here
    loadData: (dispatch: Dispatch) =>
      Promise.all([
        dispatch(fetchUsersIfNeeded()), // Register your server-side call action(s) here
      ]),
  },
  {
    path: '/',
    exact: true,
    component: FormBoard,
  },
  {
    path: '/UserInfo/:id',
    component: UserInfoPage,
    loadData: (dispatch: Dispatch, params: Object) =>
      Promise.all([dispatch(fetchUserIfNeeded(params.id))]),
  },
  {
    path: '*',
    component: NotFoundPage,
  },
];
