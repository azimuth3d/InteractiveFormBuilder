// @flow
import React, { PureComponent } from 'react';
import styles from './styles.scss';

type Props = { title: string, changeFormTitle:(title: string) => void };

// saveTitleValue: () => void };

class SingleInput extends PureComponent<Props> {
  changeFormTitle = (event) => {
    this.props.changeFormTitle(event.target.value);
  }
  render() {
    return (
      <div className={styles.SingleInput}>
        <div style={{ padding: '10px 0' }}>
          <input
            type="text"
            className={styles.Title}
            name="title"
            value={this.props.title}
            onChange={this.changeFormTitle}
          />
        </div>
        <div>
          <input
            type="text"
            className={styles.Value}
            name="value"
            placeholder="คำตอบ"
            disabled
          />
        </div>
      </div>
    );
  }
}

export default SingleInput;
