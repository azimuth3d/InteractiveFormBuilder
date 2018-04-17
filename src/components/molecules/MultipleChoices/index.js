// @flow
import React, { Component } from 'react';
import RadioInput from '../../atoms/RadioInput';
import CheckboxInput from '../../atoms/CheckboxInput';
import AddChoice from '../../atoms/AddChoice';

import styles from './styles.scss';

type Props = {
  title: string,
  type: string,
  changeFormTitle: (title: string) => void,
  changeChoiceTitle: (title: string) => void,
  addNewChoice: () => void,
  radiosTitle: string[],
};

type State = { radiosTitle: string[] };

class MultipleChoices extends Component<Props, State> {
  // state = { radiosTitle: [''] };
  changeFormTitle = event => this.props.changeFormTitle(event.target.value);
  changeChoiceTitle = (index, event) => {
    this.props.changeChoiceTitle(index, event.target.value);
  };

  render() {
    const { addNewChoice, radiosTitle, type } = this.props;
    return (
      <div className={styles.MultipleChoice}>
        <div style={{ padding: '10px 0' }}>
          <input
            type="text"
            className={styles.Title}
            name="title"
            placeholder="question title"
            value={this.props.title}
            onChange={this.changeFormTitle}
          />
          <hr className={styles.underline} />
          {radiosTitle.map((title, index) => (
            <div key={title}>
              {type === 'Radio' ? (
                <RadioInput
                  key={title}
                  index={index}
                  changeChoiceTitle={this.changeChoiceTitle}
                  title={title}
                />
              ) : (
                <CheckboxInput
                  key={title}
                  index={index}
                  changeChoiceTitle={this.changeChoiceTitle}
                  title={title}
                />
              )}
              {index === radiosTitle.length - 1 && (
                <AddChoice addNewChoice={addNewChoice} />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MultipleChoices;
