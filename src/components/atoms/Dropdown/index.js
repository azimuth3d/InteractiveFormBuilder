import React, { Component } from 'react';
import styles from './styles.scss';

type State = { drop: boolean, selected: string };
type Props = { changeFormType: (type: string) => void };

const ComponentType = {
  ShortQuestion: <span className={styles.textbox} />,
  MultipleChoices: <span className={styles.radio} />,
  Checkbox: <span className={styles.checkbox} />,
  DatePicker: <span className={styles.date} />,
};

class Dropdown extends Component<Props, State> {
  state = { drop: false, selected: 'ShortQuestion' };
  changeSelect = (event) => {
    // To access your button instance use `event.currentTarget`
    event.preventDefault();
    this.setState({
      drop: !this.state.drop,
      selected: event.target.dataset.id,
    });
    this.props.changeFormType(event.target.dataset.id);
  };

  toggleDropdown = (e) => {
    e.preventDefault();
    this.setState({ drop: !this.state.drop });
  };

  render() {
    const visible: number = this.state.drop ? 1 : 0;
    const displayFlag: string = this.state.drop ? 'block' : 'none';
    return (
      <div
        role="presentation"
        onKeyDown={() => {}}
        onClick={this.toggleDropdown}
        style={{ textDecoration: 'none', display: 'inline-block' }}
      >
        <div className={styles.Dropdown}>
          {ComponentType[this.state.selected]}
          {this.state.selected}
          <ul
            className={styles.choice}
            style={{ opacity: visible, display: displayFlag }}
          >
            <li>
              <div
                role="presentation"
                tabIndex="-1"
                onKeyDown={() => {}}
                data-id="ShortQuestion"
                onClick={this.changeSelect}
              >
                <span className={styles.textbox} data-id="ShortQuestion" />{' '}
                short question
              </div>
            </li>
            <li>
              <div
                role="presentation"
                tabIndex="-2"
                onKeyDown={() => {}}
                data-id="MultipleChoices"
                onClick={this.changeSelect}
              >
                <span className={styles.radio} data-id="MultipleChoices" />{' '}
                multiple choices
              </div>
            </li>
            <li>
              <div
                role="presentation"
                tabIndex="-3"
                onKeyDown={() => {}}
                data-id="Checkboxes"
                onClick={this.changeSelect}
              >
                <span className={styles.checkbox} data-id="Checkboxes" />{' '}
                checkbox
              </div>
            </li>
            <li>
              <div
                role="presentation"
                tabIndex="-4"
                onKeyDown={() => {}}
                data-id="DatePicker"
                onClick={this.changeSelect}
              >
                <span className={styles.date} data-id="DatePicker" /> date
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
