class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 1
  };
  handleRemoveFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart - 1
    });
  };
  handleAddFromCart = () => {
    this.setState({
      shoppingCart: this.state.shoppingCart + 1
    });
  };

  handleBuy = () => {
    this.setState({
      availableProducts: this.state.availableProducts - this.state.shoppingCart,
      shoppingCart: 0
    });
  };

  // debugger;
  render() {
    const { shoppingCart, availableProducts } = this.state;

    const style = // warunek kiedy shoppingCart jest rowny 0  to opacity jest 0.3
      shoppingCart === 0
        ? {
            // backgroundColor: "red",
            opacity: 0.3
          }
        : {};

    return (
      <div>
        <button
          disabled={shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>

        <span
          // dodawanie styli css liniowo
          style={style}
        >
          {" "}
          {shoppingCart}{" "}
        </span>

        <button
          disabled={shoppingCart === availableProducts ? true : false}
          onClick={this.handleAddFromCart}
        >
          +
        </button>
        {shoppingCart > 0 && <button onClick={this.handleBuy}>Kup</button>}
        {/* dodaje button gdy shoppingcart jest wieksza od 0, musi byc operator porownania */}
        <p>{availableProducts}</p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
