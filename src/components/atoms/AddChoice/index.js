import React, { PureComponent } from 'react';
import styles from './styles.scss';

type Props = { addNewChoice: (formIndex: number) => void, formIndex: number };

export default class AddChoice extends PureComponent<Props> {
  render() {
    const { addNewChoice, formIndex } = this.props;
    return (
      <button
        className={styles.AddNew}
        onClick={() => {
          addNewChoice(formIndex);
        }}
      >
        +
      </button>
    );
  }
}
