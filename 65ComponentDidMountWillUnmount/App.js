class App extends React.Component {
  state = { active: true };
  hendleClick = () => {
    this.setState(state => ({
      active: !this.state.active
    }));
  };
  render() {
    return (
      <div>
        <SwitchButto active={this.active} click={this.hendleClick} />
        {/* {this.state.active ? <Clock /> : null} */}
        {this.state.active && <Clock />}
      </div>
    );
  }
}

const SwitchButto = props => (
  <button onClick={props.click}>{props.active ? "Wyłącz" : "Włącz"}</button>
);

class Clock extends React.Component {
  interval = "";
  state = {
    time: this.getTiem()
  };

  getTiem() {
    const currentTime = new Date();
    // console.log(currentTime);
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      secounds: currentTime.getSeconds()
    };
  }

  setTime = () => {
    const time = this.getTiem();
    this.setState({
      time
    });
  };
  componentDidMount() {
    this.interval = setInterval(this.setTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    this.getTiem();
    const { hours, minutes, secounds } = this.state.time;
    return (
      <div>
        {hours < 10 ? `0${hours}` : hours} :{" "}
        {minutes < 10 ? `0${minutes}` : minutes} :{" "}
        {secounds < 10 ? `0${secounds}` : secounds}
      </div>
    );
  }
}
