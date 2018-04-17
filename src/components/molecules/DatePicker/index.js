import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

type State = { date: any };

export default class DatePicker extends Component<{}, State> {
  state = {
    date: moment,
    focused: false,
  };
  render() {
    return (
      <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={(dateSelect) => {
          this.setState({ date: dateSelect });
        }} // PropTypes.func.isRequired
        focused={this.state.focused}
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
      />
    );
  }
}
