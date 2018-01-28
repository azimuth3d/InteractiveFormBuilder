import React, { Component } from 'react';
import translate from '../../../utils/translate';
import styles from './styles.scss';

type State = { drop: boolean, selected: string };

const ComponentType = {
  ShortQuestion: <span className={styles.textbox} />,
  MultipleChoice: <span className={styles.radio} />,
  Checkbox: <span className={styles.checkbox} />,
  DateTime: <span className={styles.date} />,
};

class Dropdown extends Component<{}, State> {
  state = { drop: false, selected: 'ShortQuestion' };
  changeSelect = (event) => {
    // To access your button instance use `event.currentTarget`
    event.preventDefault();
    this.setState({
      drop: !this.state.drop,
      selected: event.target.dataset.id,
    });
  };

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({ drop: !this.state.drop });
  };

  render() {
    const visible: number = this.state.drop ? 1 : 0;
    const displayFlag: string = this.state.drop ? 'block' : 'none';
    return (
      <div role="presentation" onKeyDown={() => {}} onClick={this.toggleDropdown} style={{ textDecoration: 'none', display: 'inline-block' }}>
        <div className={styles.Dropdown}>
          { ComponentType[this.state.selected] }
          { this.state.selected }
          <ul className={styles.choice} style={{ opacity: visible, display: displayFlag }}>
            <li>
              <div role="presentation" tabIndex="-1" onKeyDown={() => {}} data-id="ShortQuestion" onClick={this.changeSelect}>
                <span className={styles.textbox} data-id="ShortQuestion" /> { translate('คำถามสั้น') }
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-2" onKeyDown={() => {}} data-id="MultipleChoice" onClick={this.changeSelect} >
                <span className={styles.radio} data-id="MultipleChoice" /> multiple choices
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-3" onKeyDown={() => {}} data-id="Checkbox" onClick={this.changeSelect} >
                <span className={styles.checkbox} data-id="Checkbox" /> checkbox
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-4" onKeyDown={() => {}} data-id="DateTime" onClick={this.changeSelect} >
                <span className={styles.date} data-id="DateTime" /> date/time
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
