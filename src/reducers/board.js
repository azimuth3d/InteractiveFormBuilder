/* @flow */

import _ from 'lodash/fp';

import {
  SELECT_FORM_IN_ROW,
  SAVE_FORM,
  CHANGE_BOARD_TITLE,
  CHANGE_FORM_TITLE,
  CHANGE_FORM_TYPE,
  ADD_NEW_FORM_BLOCK,
  REMOVE_FORM_BLOCK,
  CHANGE_CHOICE_TITLE,
  ADD_NEW_CHOICE,
  LOAD_BOARD,
  SAVE_BOARD,
} from '../actions/contants';

import type { FormBoard, Action } from '../types';

type State = FormBoard;

const initialState = {
  title: 'Form Title',
  numForm: 1,
  activeRow: 1,
  forms: [
    {
      title: '',
      formId: 'first-form',
      type: 'ShortQuestion',
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
        title: 'Question title',
        formId: action.formId,
        type: 'ShortQuestion',
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
      newState.forms[action.formIndex].title = action.title;
      return newState;
    }
    case CHANGE_FORM_TYPE: {
      const newState = state;
      newState.forms[action.formIndex].type = action.formType;
      if (action.formType === 'MultipleChoices') {
        newState.forms[action.formIndex].radiosTitle = [''];
      }
      return newState;
    }
    case CHANGE_CHOICE_TITLE: {
      const newState = state;
      newState.forms[action.formIndex].radiosTitle[action.choiceIndex] =
        action.choiceTitle;
      return newState;
    }
    case ADD_NEW_CHOICE: {
      const newState = state;
      newState.forms[action.formIndex].radiosTitle.push('');
      return newState;
    }
    case LOAD_BOARD: {
      let initState = {};
      if (action.data) {
        initState = action.data;
      } else {
        initState = state;
      }
      return initState;
    }
    case SAVE_BOARD: {
      return state;
    }
    default:
      return state;
  }
};
