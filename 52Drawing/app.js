class App extends React.Component {
  state = {
    amount: "Losowanie",
    newDivin: "",
    divination: [
      { id: 0, name: "1", title: "Bedziesz mieć szczście" },
      { id: 1, name: "2", title: "Graj w loooto dziś!!!" },
      { id: 2, name: "3", title: "Znajdziesz dziś szczęście" },
      { id: 3, name: "4", title: "Ale ..." }
    ]
  };
  handleDrawing = props => {
    const ile1 = Math.floor(Math.random() * this.state.divination.length);
    const ile = this.state.divination[ile1].title;
    this.setState({
      amount: ile
    });
  };
  handleTextAdd = e => {
    this.setState({
      newDivin: e.target.value
    });
  };
  handleButtonAddTextToArray = () => {
    this.state.divination.push({
      id: this.state.divination.length,
      name: this.state.divination.length + 1,
      title: this.state.newDivin
    });
    this.setState({
      newDivin: ""
    });
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleDrawing}>Zobacz Wróżbę</button>
        <br />
        <label>
          <input
            name="newDivin"
            type="text"
            value={this.state.newDivin}
            onChange={this.handleTextAdd}
          />
          <button onClick={this.handleButtonAddTextToArray}>
            Dodaj Wróżbę
          </button>
          <br />
          {this.state.amount}
        </label>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
