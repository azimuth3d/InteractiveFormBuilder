import React from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import * as formActions from '../../actions/formBlock';
import type { Dispatch, ReduxState } from '../../types';
import FormBlock from '../../components/molecules/FormBlock';

type Props = {
  selectActiveForm: (formId: number) => void,
  changeFormTitle: (formId: number, title: string) => void,
};

const FormBlockContainer = props => <FormBlock {...props} />;

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({ formboard }),
  (dispatch: Dispatch) => ({
    selectActiveForm: (formId: number) =>
      dispatch(formActions.selectActiveForm(formId)),
    changeFormTitle: (formId: number, title: string) =>
      dispatch(formActions.changeFormTitle(formId, title)),
  })
);

export default connector(FormBlockContainer);
