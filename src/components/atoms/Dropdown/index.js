import React, { Component } from 'react';
import styles from './styles.scss';

type State = { drop: boolean, selected: string };

const ComponentType = {
  คำถามสั้น: <span className={styles.textbox} />,
  หลายตัวเลือก: <span className={styles.radio} />,
  ช่องทำเครื่องหมาย: <span className={styles.checkbox} />,
  วันที่: <span className={styles.date} />,
};

class Dropdown extends Component<{}, State> {
  state = { drop: false, selected: 'คำถามสั้น' };
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
      <div role="presentation" onKeyDown={() => {}} onClick={this.toggleDropdown} style={{ textDecoration: 'none' }}>
        <div className={styles.Dropdown}>
          { ComponentType[this.state.selected] }
          { this.state.selected }
          <ul className={styles.choice} style={{ opacity: visible, display: displayFlag }}>
            <li>
              <div role="presentation" tabIndex="-1" onKeyDown={() => {}} data-id="คำถามสั้น" onClick={this.changeSelect}>
                <span className={styles.textbox} data-id="คำถามสั้น" /> คำถามสั้นๆ
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-2" onKeyDown={() => {}} data-id="หลายตัวเลือก" onClick={this.changeSelect} >
                <span className={styles.radio} data-id="หลายตัวเลือก" /> หลายตัวเลือก
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-3" onKeyDown={() => {}} data-id="ช่องทำเครื่องหมาย" onClick={this.changeSelect} >
                <span className={styles.checkbox} data-id="ช่องทำเครื่องหมาย" /> ช่องทำเครื่องหมาย
              </div>
            </li>
            <li>
              <div role="presentation" tabIndex="-4" onKeyDown={() => {}} data-id="วันที่" onClick={this.changeSelect} >
                <span className={styles.date} data-id="วันที่" /> วันที่
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
