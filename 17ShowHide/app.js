class App extends React.Component {
  state = {
    value: ""
  };

  handleInputChang = e => {
    console.log(e.target.value);

    this.setState({
      value: e.target.value
    });
  };

  handleButton = e => {
    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <React.Fragment>
        <input
          value={this.state.value}
          placeholder="Wpisz ..."
          onChange={this.handleInputChang}
          type="text"
        />
        <button onClick={this.handleButton}> Reset </button>
        <h1 className="title">{this.state.value.toLocaleUpperCase()} </h1>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
