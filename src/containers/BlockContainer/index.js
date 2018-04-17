import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import * as formActions from '../../actions/formBlock';
import type { Dispatch, ReduxState } from '../../types';
import FormBlock from '../../components/molecules/FormBlock';

type Props = {
  selectActiveForm: (formId: number) => void,
  changeFormTitle: (formId: number, title: string) => void,
  changeFormType: (type: string) => void,
  changeChoiceTitle: (formId: number, index: number, title: string) => void,
  addNewChoice: (formIndex: number) => void,
};

const FormBlockContainer = props => <FormBlock {...props} />;

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({ formboard }),
  (dispatch: Dispatch) => ({
    selectActiveForm: (formId: number) =>
      dispatch(formActions.selectActiveForm(formId)),
    changeFormTitle: (formId: number, title: string) =>
      dispatch(formActions.changeFormTitle(formId, title)),
    changeFormType: (index: number, type: string) =>
      dispatch(formActions.changeFormType(index, type)),
    changeChoiceTitle: (formId: number, choiceIndex: number, title: string) =>
      dispatch(formActions.changeChoiceTitle(formId, choiceIndex, title)),
    addNewChoice: (formId: number) =>
      dispatch(formActions.addNewChoice(formId)),
  })
);

export default connector(FormBlockContainer);
