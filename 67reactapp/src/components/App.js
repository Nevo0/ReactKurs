import React, { Component } from "react";
// imrc
import "./App.css";
import SwitchButton from "./SwitchButton";

//cc
class App extends Component {
  state = {
    time: 0,
    active: false
  };

  handleClick = () => {
    if (this.state.active) {
      clearInterval(this.idInterval);
    } else {
      this.idInterval = setInterval(() => this.addSecond(), 1000);
    }
    this.setState({
      active: !this.state.active
    });
  };

  addSecond = () => {
    this.setState({ time: this.state.time + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.time}</p>
        <SwitchButton
          active={this.state.active}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
