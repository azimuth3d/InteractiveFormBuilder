import React, { PureComponent } from 'react';
import styles from './styles.scss';

class LanguageSwitch extends PureComponent {
  render() {
    return (
      <span>
        <button type="button" className={styles.LanguageSwitch}> ไทย </button>
        <button type="button" className={styles.LanguageSwitch}> EN </button>
      </span>
    );
  }
}

export default LanguageSwitch;
