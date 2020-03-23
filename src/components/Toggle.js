import React, { Component } from "react";
export default class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };
    this.switchState = this.switchState.bind(this);
  }
  switchState() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.switchState}>
          {this.state.isToggleOn ? "ON" : "OFF"}
        </button>
      </div>
    );
  }
}
