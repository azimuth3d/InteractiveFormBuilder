
import type { Dispatch, ThunkAction } from '../types';
import { CHANGE_FORM_TITLE,
  SELECT_FORM_IN_ROW,
  ADD_NEW_FORM_BLOCK,
  REMOVE_FORM_BLOCK,
} from './contants';

export const changeFormTitle = (formId: number, changeTitle: string): ThunkAction => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: CHANGE_FORM_TITLE,
    title: changeTitle,
    id: formId,
  });
};

export const selectActiveForm = (numRow: number): ThunkAction => (
  dispatch: Dispatch,
) => {
  dispatch({
    type: SELECT_FORM_IN_ROW,
    row: numRow,
  });
};

export const addNewFormBlock = (Id: string): ThunkAction => async (
  dispatch: Dispatch,
) => {
  dispatch({
    type: ADD_NEW_FORM_BLOCK,
    formId: Id,
  });
};

export const removeFormBlock = (Id: string): ThunkAction => (
  dispatch: Dispatch
) => {
  dispatch({
    type: REMOVE_FORM_BLOCK,
    removeId: Id,
  });
};
