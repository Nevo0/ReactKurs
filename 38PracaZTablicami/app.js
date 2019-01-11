class LiistItem extends React.Component {
  state = {
    items: ["jablko", "sliwka", "gruszka"]
  };
  render() {
    return (
      <div>
        <ul>
          <li>{this.state.items[0]}</li>
          <li>{this.state.items[1]}</li>
          <li>{this.state.items[2]}</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<LiistItem />, document.getElementById("root"));
