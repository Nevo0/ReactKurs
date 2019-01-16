class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    number: "1"
  };
  handleCityChange = e => {
    this.setState({
      city: e.target.value
    });
  };
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  handleIsLoved = e => {
    this.setState({
      isLoved: e.target.checked
    });
  };
  handleVisit = e => {
    this.setState({
      number: e.target.value
    });
  };
  render() {
    return (
      <div>
        <label>
          Podaj Miasto:
          <input
            type="text"
            name="name"
            value={this.state.city}
            onChange={this.handleCityChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście:{" "}
          <textarea value={this.state.text} onChange={this.handleText} />
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleIsLoved}
          />
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście
          <select value={this.state.number} onChange={this.handleVisit}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">Więcej</option>
          </select>
        </label>
        <br />
        <label>
          Podaj emial:
          <input type="text" name="email" />
        </label>
        <br />
        <button>Zapisz sie</button>
      </div>
    );
  }
}

ReactDOM.render(<Form />, document.getElementById("root"));
