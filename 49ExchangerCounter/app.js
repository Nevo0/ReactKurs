const Dollars = props => (
  <div>
    Wartość w Dolarach:{" "}
    {props.cash <= 0 ? "" : (props.cash / props.ratio).toFixed(2)}
  </div>
);
const Euro = props => {
  const value = (props.cash / props.ratio).toFixed(2);
  return <div>Wartość w Euro: {props.cash <= 0 ? "" : value}</div>;
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    ratioDollar: 3.6,
    ratioEuro: 4.1
  };
  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  render() {
    const { amount, ratioDollar, ratioEuro } = this.state;
    return (
      <React.Fragment>
        <div className="app">
          <label>
            Wpisz ile masz Złotówek:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
          </label>
          <Dollars cash={amount} ratio={ratioDollar} />
          <Euro cash={amount} ratio={ratioEuro} />
        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
