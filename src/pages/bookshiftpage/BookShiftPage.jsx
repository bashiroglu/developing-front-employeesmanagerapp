import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

export class BookShiftPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    };
  }
  onChange = date => {
    this.setState({ date });
  };

  render() {
    const { date } = this.state;
    return (
      <div className="container">
        <DatePicker onChange={this.onChange} value={date} />
      </div>
    );
  }
}

export default BookShiftPage;
