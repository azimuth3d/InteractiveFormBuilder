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
      formId: 1,
      type: 'singleInput',
    },
  ],
};

export default (state: State = initialState, action: Action = {}): State => {
  switch (action.type) {
    case SELECT_FORM_IN_ROW:
      return _.assign(state, { activeRow: action.activeRow });
    case SAVE_FORM:
      return _.assign(state, { numForms: state.numForms + 1 });
    case CHANGE_BOARD_TITLE:
      return _.assign(state, { title: action.title });
    case ADD_NEW_FORM_BLOCK: {
      const newForm = state.forms;
      newForm.push({
        title: 'คำถามสั้น',
        formId: state.numForm + 1,
        type: 'singleInput',
      });
      return _.assign(state, {
        numForm: action.formId + 1,
        activeRow: state.formId,
        forms: newForm,
      });
    }
    case REMOVE_FORM_BLOCK: {
      let newForms = state.forms;
      newForms = newForms.filter(form => form.formId !== action.removeId);
      return _.assign(state, { forms: newForms });
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
