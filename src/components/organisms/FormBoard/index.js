/* @flow */

import React, { PureComponent } from 'react';
import styles from './styles.scss';
// import FormBlock from '../../molecules/FormBlock';
import FormBlock from '../../../containers/BlockContainer';
import FormToolbar from '../FormToolbar';

import type { FormBoard as FormBoardType } from '../../../types';

type Props = {
  board: FormBoardType,
  changeBoardTitle: (title: string) => void,
};

class FormBoard extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.changeTitle = this.changeTitle.bind(this);
  }
  changeTitle(event: any) {
    this.props.changeBoardTitle(event.target.value);
  }
  render() {
    const { board } = this.props;
    return (
      <div className={styles.FormBoard}>
        <div className={styles.container}>
          <div className={styles.formTitle}>
            {
              <input
                type="text"
                value={board ? board.title : null}
                onChange={this.changeTitle}
                className={styles.Title}
                placeholder="form title"
              />
            }
            <hr className={styles.underline} />
          </div>
          {board.forms.map((form, i) => <FormBlock index={i} key={form.formId} />)}
        </div>
        <div className={styles.toolbar}>
          <FormToolbar row={board.activeRow - 1} />
        </div>
      </div>
    );
  }
}
export default FormBoard;
