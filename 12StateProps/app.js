class ShopingList extends React.Component {
  state = {
    items1: "ogorek",
    items2: "sok",
    items3: "woda",

    example: "4"
  };
  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          {/* <li>{this.state.items1}</li>
          <li>{this.state.items2}</li>
          <li>{this.state.items3}</li> */}
          <ItemList name={this.state.items1} example={this.state.example} />
          <ItemList name={this.state.items2} example={this.state.example} />
          <ItemList name={this.state.items3} example={this.state.example} />
        </ul>
      </>
    );
  }
}

// const ItemList = props => {
//   return <li>{props.name}</li>;
// };

class ItemList extends React.Component {
  render() {
    return (
      <li>
        {this.props.name} - {this.props.example}
      </li>
    );
  }
}

ReactDOM.render(<ShopingList />, document.getElementById("root"));
