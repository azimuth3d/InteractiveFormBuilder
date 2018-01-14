/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import FormBoard from '../../components/organisms/FormBoard';
import changeTitle from '../../actions/formBoard';
import type {
  FormBoard as FormBoardType,
  Dispatch,
  ReduxState,
} from '../../types';

type Props = {
  formboard: FormBoardType,
  changeBoardTitle: (title: string) => void,
};

export class FormBoardContainer extends PureComponent<Props> {
  render() {
    const {
      formboard,
      changeBoardTitle,
    } = this.props;
    return (
      <FormBoard
        board={formboard}
        changeBoardTitle={changeBoardTitle}
      />
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({ formboard }),
  (dispatch: Dispatch) => ({
    changeBoardTitle: (title: string) => dispatch(changeTitle(title)),
  }),
);

export default connector(FormBoardContainer);
