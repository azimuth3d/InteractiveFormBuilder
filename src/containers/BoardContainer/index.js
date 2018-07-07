/* @flow */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import type { Connector } from 'react-redux';
import FormBoard from '../../components/organisms/FormBoard';
import {
  changeBoardTitle,
  loadBoard,
  saveForms,
} from '../../actions/formBoard';
import type {
  FormBoard as FormBoardType,
  Dispatch,
  ReduxState,
} from '../../types';

type Props = {
  formboard: FormBoardType,
  changeTitle: (title: string) => void,
  loadBoard: (userId: string) => void,
  saveBoard: (board: FormBoardType) => void,
};

export class FormBoardContainer extends PureComponent<Props> {
  componentDidMount() {
    // console.log('loading....');
    this.props.loadBoard('user001');
  }
  render() {
    const { formboard, changeTitle, saveBoard } = this.props;
    return (
      <FormBoard
        board={formboard}
        saveBoard={saveBoard}
        changeBoardTitle={changeTitle}
      />
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({
    formboard,
  }),
  (dispatch: Dispatch) => ({
    changeTitle: (title: string) => dispatch(changeBoardTitle(title)),
    loadBoard: (userId: string) => dispatch(loadBoard(userId)),
    saveBoard: (board: FormBoard) => dispatch(saveForms(board)),
  })
);

export default connector(FormBoardContainer);
