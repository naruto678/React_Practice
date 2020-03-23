import React, { Component } from "react";

class Greet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click here to subscribe",
      count: 0
    };
    this.changeMessage = this.changeMessage.bind(this);
  }

  changeMessage() {
    this.setState({
      message: "thank you for subscribing",
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.changeMessage}>Subscribe</button>
      </div>
    );
  }
}

export default Greet;
