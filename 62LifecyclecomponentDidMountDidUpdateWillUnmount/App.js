class App extends React.Component {
  state = { status: true };
  componentDidMount() {
    console.log("Aplikacja zamontowana");
  }

  componentDidUpdate() {
    console.log("Aplikacja aktualizowanaw");
  }
  render() {
    console.log("renderowanie Aplikacji");
    return (
      <div>
        <button
          onClick={() =>
            this.setState({
              status: !this.state.status
            })
          }
        >
          Przełącz
        </button>
        <h1>{this.state.status ? "xxx " : "yyy"}</h1>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 status={this.state.status} />}
      </div>
    );
  }
}

class Child1 extends React.Component {
  state = {};
  componentDidMount() {
    console.log("Child1 zamontowany");
  }

  componentDidUpdate() {
    console.log("Child1 aktualizowany");
  }
  render() {
    console.log("renderowanie Child1");

    return <div>{String(this.props.status)}</div>;
  }
}

class Child2 extends React.Component {
  state = {};
  componentDidMount() {
    console.log("Child2 zamontowany");
  }

  componentDidUpdate() {
    console.log("Child2 aktualizowany");
  }
  componentWillUnmount() {
    console.log("Child2 odmontowany");
  }
  render() {
    console.log("renderowanie Child2");

    return <div>Komponent Child2 zamontowany</div>;
  }
}
