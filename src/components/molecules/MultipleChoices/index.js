// @flow
import React, { PureComponent } from 'react';
import styles from './styles.scss';

type Props = { title: string, changeFormTitle:(title: string) => void };

class MultipleChoices extends PureComponent<Props> {
  changeFormTitle = (event) => {
    this.props.changeFormTitle(event.target.value);
  }
  render() {
    return (
      <div className={styles.MultipleChoice}>
        <div style={{ padding: '10px 0' }}>
          <input
            type="text"
            className={styles.Title}
            name="title"
            value={this.props.title}
            onChange={this.changeFormTitle}
          />
        </div>
      </div>
    );
  }
}

export default MultipleChoices;
