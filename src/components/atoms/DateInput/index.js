import React from 'react';
import styles from './styles.scss';

export default class DateIcon extends React.PureComponent {
  render() {
    return (
      <div className={styles.DateInput}>
        <input type="text" />
        <div className={styles.DateBtn} />
      </div>
    );
  }
}
