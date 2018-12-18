class Counter extends React.Component {
  state = {
    count: 0,
    result: this.props.counter
    // do result i do elseif tez przypisujemy props ktory jest w ReactDOM moze byc tez jako zmienna
  };

  handleMathClick = (type, number) => {
    // musi byc funkcja strzalkowa zeby dzialalo poprawnie this
    // debugger;

    if (type === "subtraction") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result - number
      }));
    } else if (type === "addition") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: prevState.result + number
      }));
    } else if (type === "reset") {
      this.setState(prevState => ({
        count: prevState.count + 1,
        result: this.props.counter
      }));
    }
  };

  render() {
    return (
      <React.Fragment>
        <MathButton
          name="-10"
          number="10"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="-1"
          number="1"
          type="subtraction"
          click={this.handleMathClick}
        />
        <MathButton
          name="Reset"
          number="10"
          type="reset"
          click={this.handleMathClick}
        />
        <MathButton
          name="+1"
          number="1"
          type="addition"
          click={this.handleMathClick}
        />
        <MathButton
          name="+10"
          number="10"
          type="addition"
          click={this.handleMathClick}
        />
        <h1>Liczna Kliknieć: {this.state.count}</h1>
        <h1>Wynik: {this.state.result}</h1>
      </React.Fragment>
    );
  }
}

const MathButton = props => {
  const number = parseInt(props.number);
  console.log(props);
  // return <button onClick={props.click}>{props.name}</button>;nie zadziala bo nie przekazujemy nic do handleMathClick musimy użyć funkcj strzalkowej
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};
ReactDOM.render(<Counter counter="10" />, document.getElementById("root"));
