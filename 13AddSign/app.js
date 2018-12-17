// import React from "react";
class App extends React.Component {
  state = {
    text: ""
  };

  handleClick = () => {
    const leter = "a";
    this.setState({
      text: this.state.text + leter
    });
    // alert(this.state.text);
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleClick.bind(this)}> Dodaj "A" </button>
        <h1>{this.state.text}</h1>{" "}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
