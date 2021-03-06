import React, { Component } from 'react';
import './../css/App.css';


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  zeroAhead(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    this.setState({ days, hours, minutes, seconds });
  }


  render() {
    return (
      <div className="Clock">
        <div className="Clock-dd">{this.zeroAhead(this.state.days)} days</div>
        <div className="Clock-hh">{this.zeroAhead(this.state.hours)} hours</div>
        <div className="Clock-mm">{this.zeroAhead(this.state.minutes)} minutes</div>
        <div className="Clock-ss">{this.zeroAhead(this.state.seconds)} seconds</div>
      </div>
    );
  }
}


export default Clock;
