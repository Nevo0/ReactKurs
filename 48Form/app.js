class Form extends React.Component {
  state = {
    city: "London",
    text: "",
    isLoved: true,
    number: "1"
  };
  handleChange = e => {
    // console.log([e.target.name]);
    // console.log(e.target.type);
    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked
        //odwolujemy sie do name
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
        //odwolujemy sie do name
      });
    }
  };
  render() {
    return (
      <div>
        <label>
          Podaj Miasto:
          <input
            name="city"
            type="text"
            value={this.state.city}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście:{" "}
          <textarea
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            type="checkbox"
            checked={this.state.isLoved}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Ile razy byłeś w tym mieście
          <select
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          >
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
