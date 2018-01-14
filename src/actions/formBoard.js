/* @flow */

import type { Dispatch, ThunkAction } from '../types';
import { CHANGE_BOARD_TITLE } from './contants';

const changeBoardTitle = (changeTitle: string): ThunkAction => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: CHANGE_BOARD_TITLE,
    title: changeTitle,
  });
};

export default changeBoardTitle;
