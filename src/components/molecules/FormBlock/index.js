// @flow

import React, { Component } from 'react';
import type { FormBoard as FormBoardType } from '../../../types';
import styles from './styles.scss';
import SingleInput from '../SingleInput';
import MultipleChoices from '../MultipleChoices';
import DatePicker from '../DatePicker';
import Dropdown from '../../atoms/Dropdown';
import ControlBtn from '../../atoms/ControlBtn';

type Prop = {
  formboard: FormBoardType,
  index: number,
  selectActiveForm: (formId: number) => void,
  changeFormTitle: (index: number, title: string) => void,
  changeFormType: (index: number, type: string) => void,
  changeChoiceTitle: (formId: number, index: number, title: string) => void,
  addNewChoice: (formIndex: number) => void,
};

/*
const FormControl = props => {
  let form;
  switch (props.type) {
    case 'ShortQuestion':
      form = (
        <SingleInput title={props.title} changeFormTitle={props.changeTitle} />
      );
      break;
    case 'MultipleChoices':
      form = (
        <MultipleChoices
          title={props.title}
          changeFormTitle={props.changeTitle}
          changeChoiceTitle={props.changeChoiceTitle}
        />
      );
      break;
    default:
      form = null;
  }
  return form;
};
*/

class FormBlock extends Component<Prop> {
  constructor(props) {
    super(props);
    this.state = { title: '' };
    this.changeFormTitle = this.changeFormTitle.bind(this);
    this.changeActiveForm = this.changeActiveForm.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
  }
  changeActiveForm() {
    this.props.selectActiveForm(this.props.index + 1);
  }
  changeFormTitle(value: string) {
    this.setState({ title: value });
    this.props.changeFormTitle(this.props.index, value);
  }
  changeFormType(type: string) {
    this.props.changeFormType(this.props.index, type);
  }
  changeChoiceTitle = (choiceIndex: number, title: string) => {
    this.props.changeChoiceTitle(this.props.index, choiceIndex, title);
  };
  addNewChoice = () => {
    this.props.addNewChoice(this.props.index);
  };
  render() {
    const { formboard, index } = this.props;
    const form = formboard.forms[index];
    const { activeRow } = formboard;
    const { formId, type, radiosTitle } = form;

    let renderform;

    switch (type) {
      case 'ShortQuestion':
        renderform = (
          <SingleInput
            title={this.state.title}
            changeFormTitle={this.changeFormTitle}
            key={index}
          />
        );
        break;
      case 'MultipleChoices':
        renderform = (
          <MultipleChoices
            key={index}
            title={this.state.title}
            changeFormTitle={this.changeFormTitle}
            changeChoiceTitle={this.changeChoiceTitle}
            addNewChoice={this.addNewChoice}
            radiosTitle={radiosTitle}
            type="Radio"
          />
        );
        break;
      case 'Checkboxes':
        renderform = (
          <MultipleChoices
            key={index}
            title={this.state.title}
            changeFormTitle={this.changeFormTitle}
            changeChoiceTitle={this.changeChoiceTitle}
            addNewChoice={this.addNewChoice}
            radiosTitle={radiosTitle}
            type="Checkbox"
          />
        );
        break;
      case 'DatePicker':
        renderform = (
          <DatePicker />
        );
        break;
      default:
        renderform = null;
    }

    return (
      <div
        ref={formId}
        className={index === activeRow - 1 ? styles.active : styles.FormBlock}
        onClick={this.changeActiveForm}
        onKeyDown={() => {}}
        role="presentation"
        key={formId}
        tabIndex={index}
      >
        {renderform}
        <Dropdown changeFormType={this.changeFormType} />
        <ControlBtn formId={formId} />
      </div>
    );
  }
}

export default FormBlock;
