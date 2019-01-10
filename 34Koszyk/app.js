class App extends React.Component {
  state = {
    availableProducts: 7,
    shoppingCart: 7
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
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
