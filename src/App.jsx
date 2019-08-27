/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Clock from './components/Clock';
import Error from './components/error/Error';
import validateDate from './util/validateDate';
import './css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.changeDeadline = this.changeDeadline.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleError = this.toggleError.bind(this);

    this.state = {
      deadline: 'January 01, 2018',
      newDeadline: '',
      error: false
    };
  }

  changeDeadline() {
    if (validateDate(this.state.newDeadline)) {
      this.setState(() => {
        return { deadline: this.state.newDeadline, error: false };
      });
    } else {
      this.setState(() => {
        return { error: true };
      });
    }
  }

  toggleError() {
    this.setState(() => {
      return { ...this.state, error: !this.state.error };
    });
  }

  handleChange({ target }) {
    if (target.value)
      this.setState(() => {
        return { newDeadline: target.value };
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-title">
          Counter to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <div className="Input">
          <input
            className="Input-form"
            placeholder="New date"
            onChange={event => this.handleChange(event)}
          />
          <Error onCloseAction={this.toggleError} show={this.state.error} />
          <button
            className="Button"
            type="submit"
            onClick={this.changeDeadline}>Set new date</button>
        </div>
      </div>
    );
  }
}

export default App;
