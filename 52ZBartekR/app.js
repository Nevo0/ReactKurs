class App extends React.Component {
  state = {
    option: null,
    newDivin: "",
    options: [
      { id: 0, name: "1", title: "Bedziesz mieć szczście" },
      { id: 1, name: "2", title: "Graj w loooto dziś!!!" },
      { id: 2, name: "3", title: "Znajdziesz dziś szczęście" },
      { id: 3, name: "4", title: "Ale ..." }
    ]
  };
  handleShowOption = props => {
    const index = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[index].title;
    this.setState({
      option: option
    });
  };
  handleTextAdd = e => {
    this.setState({
      newDivin: e.target.value
    });
  };
  handleButtonAddTextToArray = () => {
    if (this.state.newDivin === "") return;

    const options = [...this.state.options];
    // robimy kopie tabliczy na ktorej pracujemy i do options przypisujemy stara tabloce[...this.state.options];

    options.push({
      id: this.state.options.length,
      name: this.state.options.length + 1,
      title: this.state.newDivin
    });
    this.setState({
      options: options,
      newDivin: ""
    });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleShowOption}>Zobacz Wróżbę</button>
        <br />
        <label>
          <input
            name="newDivin"
            type="text"
            value={this.state.newDivin}
            // value jest przekazywane przez state
            onChange={this.handleTextAdd}
          />
          <button onClick={this.handleButtonAddTextToArray}>
            Dodaj Wróżbę
          </button>
          <br />
          {this.state.option ? <h1>{this.state.option}</h1> : null}
        </label>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
