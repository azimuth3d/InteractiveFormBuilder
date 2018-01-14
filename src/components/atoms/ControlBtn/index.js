import React, { PureComponent } from 'react';
import type { Connector } from 'react-redux';
import { connect } from 'react-redux';
import { removeFormBlock } from '../../../actions/formBlock';
import type { ReduxState, Dispatch } from '../../../types';
import styles from './styles.scss';

type Props = { removeFormBlock: (formId: string) => void,
  duplicateForm: () => void, formId: string };

class ControlBtn extends PureComponent<Props> {
  render() {
    const { formId } = this.props;
    return (
      <span className={styles.ControlBtn}>
        <button
          type="button"
          className={styles.DeleteBtn}
          onClick={() => this.props.removeFormBlock(formId)}
        />
        <button
          type="button"
          className={styles.DuplicateBtn}
          onClick={this.props.duplicateForm}
        />
      </span>
    );
  }
}

const connector: Connector<{}, Props> = connect(
  ({ formboard }: ReduxState) => ({ formboard }),
  (dispatch: Dispatch) => ({
    removeFormBlock: (formId: string) =>
      dispatch(removeFormBlock(formId)),
  })
);

export default connector(ControlBtn);
