// @flow

import React, { PureComponent } from 'react';
import type { FormBoard as FormBoardType } from '../../../types';
import styles from './styles.scss';
import SingleInput from '../SingleInput';
import MultipleChoices from '../MultipleChoices';
import Dropdown from '../../atoms/Dropdown';
import ControlBtn from '../../atoms/ControlBtn';

type Prop = {
  formboard: FormBoardType,
  index: number,
  selectActiveForm: (formId: number) => void,
  changeFormTitle: (index: number, title: string) => void,
};

const FormControl = (props) => {
  let form;
  switch (props.type) {
    case 'SingleInput':
      form = <SingleInput title={props.title} changeFormTitle={props.changeTitle} />;
      break;
    case 'MultipleChoices':
      form = <MultipleChoices title={props.title} changeFormTitle={props.changeTitle} />;
      break;
    default:
      form = null;
  }
  return form;
};


class FormBlock extends PureComponent<Prop> {
  constructor(props) {
    super(props);
    this.state = { title: 'question title' };
    this.changeFormTitle = this.changeFormTitle.bind(this);
    this.changeActiveForm = this.changeActiveForm.bind(this);
  }
  changeActiveForm() {
    this.props.selectActiveForm(this.props.index + 1);
  }
  changeFormTitle(value: string) {
    // console.log(`value is ${value}  di is ${this.props.index}`);
    this.setState({ title: value });
    this.props.changeFormTitle(this.props.index, value);
  }

  render() {
    const { formboard, index } = this.props;
    const form = formboard.forms[index];
    const { activeRow } = formboard;
    const { formId, type } = form;
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
        {
          <FormControl
            type={type}
            title={this.state.title}
            changeTitle={this.changeFormTitle}
          />
        }
        <Dropdown /> <ControlBtn formId={formId} />
      </div>
    );
  }
}

export default FormBlock;
