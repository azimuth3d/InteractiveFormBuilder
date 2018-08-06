// @flow

import React, { PureComponent } from 'react';
import styles from './styles.scss';

type Props = {
  saveBoard: () => void,
};

export default class SaveButton extends PureComponent<Props> {
  render() {
    return (
      <div>
        <button
          className={styles.SaveButton}
          type="button"
          name="saveForm"
          onClick={this.props.saveBoard}
        >
          Save
        </button>
      </div>
    );
  }
}
