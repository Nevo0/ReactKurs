const Item = props => {
  return <li>{`Owoc ${props.content}`}</li>;
};

class LiistItem extends React.Component {
  state = {
    items: ["jabłko", "sliwka", "gruszka"]
  };
  render() {
    const Items = this.state.items.map(item => (
      <Item key={item} content={item} />
    ));
    return (
      <div>
        <ul>{Items}</ul>
      </div>
    );
  }
}

ReactDOM.render(<LiistItem />, document.getElementById("root"));
