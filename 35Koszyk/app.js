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
      availableProducts: this.state.availableProducts - this.state.shoppingCart
    });
  };

  // debugger;
  render() {
    return (
      <div>
        <button
          disabled={this.state.shoppingCart ? false : true}
          onClick={this.handleRemoveFromCart}
        >
          -
        </button>
        <span> {this.state.shoppingCart} </span>
        <button
          disabled={
            this.state.shoppingCart === this.state.availableProducts
              ? true
              : false
          }
          onClick={this.handleAddFromCart}
        >
          +
        </button>
        {this.state.shoppingCart > 0 && (
          <button onClick={this.handleBuy}>Kup</button>
        )}
        {/* dodaje button gdy shoppingcart jest wieksza od 0, musi byc operator porownania */}
        <p>{this.state.availableProducts}</p>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
