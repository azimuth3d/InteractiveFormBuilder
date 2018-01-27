/* @flow */

import _ from 'lodash/fp';

import {
  SELECT_FORM_IN_ROW,
  SAVE_FORM,
  CHANGE_BOARD_TITLE,
  CHANGE_FORM_TITLE,
  ADD_NEW_FORM_BLOCK,
  REMOVE_FORM_BLOCK,
} from '../actions/contants';

import type { FormBoard, Action } from '../types';

type State = FormBoard;

const initialState = {
  title: 'ฟอร์มไม่มีชื่อ',
  numForm: 1,
  activeRow: 1,
  forms: [
    {
      title: 'คำถามสั้น',
      formId: 'first-form',
      type: 'singleInput',
    },
  ],
};

export default (state: State = initialState, action: Action = {}): State => {
  switch (action.type) {
    case SELECT_FORM_IN_ROW:
      return _.assign(state, { activeRow: action.row });
    case SAVE_FORM:
      return _.assign(state, { numForm: state.numForm + 1 });
    case CHANGE_BOARD_TITLE:
      return _.assign(state, { title: action.title });
    case ADD_NEW_FORM_BLOCK: {
      const newForm = state.forms;
      newForm.push({
        title: 'คำถามสั้น',
        formId: action.formId,
        type: 'singleInput',
      });
      return _.assign(state, {
        numForm: state.numForm + 1,
        activeRow: state.numForm + 1,
        forms: newForm,
      });
    }
    case REMOVE_FORM_BLOCK: {
      let newForms = state.forms;
      newForms = newForms.filter(form => form.formId !== action.removeId);
      return _.assign(state, { forms: newForms, numForm: state.numForm - 1 });
    }
    case CHANGE_FORM_TITLE: {
      const newState = state;
      newState.forms[action.id].title = action.title;
      return newState;
    }
    default:
      return state;
  }
};
