// @flow

import React, { PureComponent } from 'react';
import styles from './styles.scss';

type Props = {
  title: string,
  index: number,
  changeChoiceTitle: (index: number, title: string) => void,
};

type State = {
  title: string,
};

class CheckboxInput extends PureComponent<Props, State> {
  state = {
    title: this.props.title,
  };
  changeTitle = (event) => {
    this.setState({ title: event.target.value });
    this.props.changeChoiceTitle(this.props.index, event);
  };
  render() {
    return (
      <div className={styles.mdCheckboxDesign}>
        <input
          type="text"
          className={styles.Title}
          value={this.state.title}
          placeholder="choice name"
          onChange={this.changeTitle}
        />
        <hr />
      </div>
    );
  }
}

export default CheckboxInput;
