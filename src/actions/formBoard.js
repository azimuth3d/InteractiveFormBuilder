/* @flow */
import axios from 'axios';
import type {
  Dispatch,
  ThunkAction,
  FormBoard as FormBoardType,
} from '../types';
import { CHANGE_BOARD_TITLE, LOAD_BOARD, SAVE_BOARD } from './contants';

export const changeBoardTitle = (changeTitle: string): ThunkAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CHANGE_BOARD_TITLE,
    title: changeTitle,
  });
};

export const loadBoard = (userId: string): ThunkAction => async (
  dispatch: Dispatch
) => {
  const board = await axios.get('http://localhost:5000/board');
  // console.log(board.data[0]);
  if (board) {
    dispatch({
      type: LOAD_BOARD,
      Id: userId,
      data: board.data[0],
    });
  } else {
    dispatch({
      type: LOAD_BOARD,
      Id: userId,
      data: {},
    });
  }
};

export const saveForms = (board: FormBoardType): ThunkAction => async (
  dispatch: Dispatch
) => {
  const result = await axios.post('http://localhost:5000/save', {
    data: board,
    formId: 'random',
  });
  console.log(`result for  writing update to db ${JSON.stringify(result)}`);
  dispatch({
    type: SAVE_BOARD,
    Id: 'test',
  });
};
