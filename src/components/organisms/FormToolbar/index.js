import React, { PureComponent } from 'react';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import { addNewFormBlock } from '../../../actions/formBlock';
import type { Dispatch, FormBoard as FormBoardType, ReduxState } from '../../../types';
import styles from './styles.scss';

type Props = {
  row: number,
  addNewBlock: (formId: string) => void,
  formboard: FormBoardType,
};

class FormToolbar extends PureComponent<Props> {
  componentDidMount() {
  }
  render() {
    const { row, addNewBlock, formboard } = this.props;
    let top;
    if (row <= 1) {
      top = row * 300;
    } else {
      top = row * 260;
    }
    return (
      <div className={styles.FormToolbar} role="menu" style={{ top: `${top}px ` }}>
        <div className={styles.Add} role="button" tabIndex="0" onKeyDown={() => {}} onClick={() => { addNewBlock(formboard.numForm); }} />
        <div className={styles.Text} />
        <div className={styles.Image} />
        <div className={styles.Section} />
      </div>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({ formboard }),
  (dispatch: Dispatch) => ({
    addNewBlock: (formId: string) =>
      dispatch(addNewFormBlock(formId)),
  })
);

export default connector(FormToolbar);