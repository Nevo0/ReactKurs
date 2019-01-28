import React, { Component } from "react";
import { all } from "q";
class App extends Component {
  state = {
    work: 25,
    restingTime: 5,
    totalTime: null,
    timeElapsed: 0
  };
  componentDidMount() {
    const totalTime = this.state.work + this.state.restingTime;
    this.interval = setInterval(this.elapseTime, 1000);

    this.setState({
      totalTime,
      start: new Date()
    });
    // console.log(this.interval);
  }
  elapseTime = () => {
    let currentTime = new Date();

    let timeElapsed = Math.floor((currentTime - this.state.start) / 1000);
    this.setState({
      timeElapsed
    });
    if (this.state.timeElapsed >= this.state.work - 20) {
      alert("5 minutes brak");
      this.setState({
        start: new Date()
      });
      console.log(this.interval);
      // clearInterval(this.interval);
    }
  };

  render() {
    return (
      <div>
        This timer runs for {this.state.work} minutes, followed by rest of{" "}
        {this.state.restingTime} minutes. <br /> For a total time of{" "}
        {this.state.totalTime} minutes.
        <br />
        There arr {this.state.timeElapsed} secound elapsed.
      </div>
    );
  }
}

export default App;
