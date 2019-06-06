import type { Dispatch, ThunkAction } from '../types';
import {
  CHANGE_FORM_TITLE,
  CHANGE_FORM_TYPE,
  CHANGE_CHOICE_TITLE,
  SELECT_FORM_IN_ROW,
  ADD_NEW_FORM_BLOCK,
  ADD_NEW_CHOICE,
  REMOVE_FORM_BLOCK,
  DELETE_CHOICE,
} from './contants';

export const changeFormTitle = (index: number, changeTitle: string): ThunkAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CHANGE_FORM_TITLE,
    title: changeTitle,
    formIndex: index,
  });
};

export const changeFormType = (index: number, type: string): ThunkAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CHANGE_FORM_TYPE,
    formType: type,
    formIndex: index,
  });
};

export const changeChoiceTitle = (index: number, choice: number, title: string): ThunkAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: CHANGE_CHOICE_TITLE,
    formIndex: index,
    choiceIndex: choice,
    choiceTitle: title,
  });
};

export const addNewChoice = (index: number): ThunkAction => (dispatch: Dispatch) => {
  dispatch({
    type: ADD_NEW_CHOICE,
    formIndex: index,
  });
};

export const deleteChoice = (index: number): ThunkAction => (dispatch: Dispatch) => {
  dispatch({
    type: DELETE_CHOICE,
    choiceIndex: index,
  });
};

export const selectActiveForm = (numRow: number): ThunkAction => (dispatch: Dispatch) => {
  dispatch({
    type: SELECT_FORM_IN_ROW,
    row: numRow,
  });
};

export const addNewFormBlock = (Id: string): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({
    type: ADD_NEW_FORM_BLOCK,
    formId: Id,
  });
};

export const removeFormBlock = (Id: string): ThunkAction => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_FORM_BLOCK,
    removeId: Id,
  });
};
