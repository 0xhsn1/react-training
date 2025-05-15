import { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <p>Clock Class Component</p>
        <span>{this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}
