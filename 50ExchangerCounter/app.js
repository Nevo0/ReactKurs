const Cash = props => {
  const value = (props.cash / props.ratio).toFixed(2);
  return (
    <div>
      {props.title}: {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: ""
    // ratioDollar: 3.6,
    // ratioEuro: 4.1
  };

  currencies = [
    { id: 1, name: "Dolar", ratio: 3.6, title: "Wartość w Dolarach" },
    { id: 2, name: "Euro", ratio: 4.1, title: "Wartość w Euro" },
    { id: 3, name: "Funt", ratio: 4.6, title: "Wartość w Funtach" }
  ];
  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  render() {
    const { amount } = this.state;
    const calculators = this.currencies.map(carrency => (
      <Cash
        key={carrency.id}
        ratio={carrency.ratio}
        title={carrency.title}
        cash={amount}
      />
    ));
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
          {calculators}

          {/* <Cash cash={amount} ratio={ratioDollar} title="Wartość w Dolarach" />
          <Cash cash={amount} ratio={ratioEuro} title="Wartość w Euro" /> */}
        </div>
      </React.Fragment>
    );
  }
}
ReactDOM.render(<ExchangeCounter />, document.getElementById("root"));
