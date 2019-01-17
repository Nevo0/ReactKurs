const Cash = props => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div>
      {props.title}: {props.cash <= 0 ? "" : value}
    </div>
  );
};

class ExchangeCounter extends React.Component {
  state = {
    amount: "",
    product: "electricity"
    // ratioDollar: 3.6,
    // ratioEuro: 4.1
  };
  static defaultProps = {
    currencies: [
      { id: 0, name: "Zloty", ratio: 1, title: "Wartość w złotówkach" },
      { id: 1, name: "Dolar", ratio: 3.6, title: "Wartość w dolarach" },
      { id: 2, name: "Euro", ratio: 4.1, title: "Wartość w euro" },
      { id: 3, name: "Funt", ratio: 4.6, title: "Wartość w funtach" }
    ],
    prices: {
      electricity: 0.51,
      gas: 4.75,
      oranges: 3.51
    }
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };
  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };
  selectPrice = product => {
    const price = this.props.prices[product];

    return price;
  };

  insertSuffix(select) {
    if (select === "electricity") {
      return <em> kWh</em>;
    } else if (select === "gas") {
      return <em> litrów</em>;
    } else if (select === "oranges") {
      return <em> kilogramów</em>;
    } else return null;
  }
  render() {
    const { amount, product, prices } = this.state;
    const price = this.selectPrice(product);
    const calculators = this.props.currencies.map(carrency => (
      <Cash
        key={carrency.id}
        ratio={carrency.ratio}
        title={carrency.title}
        cash={amount}
        price={price}
      />
    ));
    return (
      <React.Fragment>
        <div className="app">
          <label>
            Wybierz produkt:
            <select value={product} onChange={this.handleSelect}>
              <option value="electricity">Prąd</option>
              <option value="gas">Benzyna</option>
              <option value="oranges">Pomarańcze</option>
            </select>
          </label>
          <br />
          <label>
            Wpisz ile masz Złotówek:
            <input
              type="number"
              value={this.state.amount}
              onChange={this.handleChange}
            />
            {this.insertSuffix(this.state.product)}
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
