// import React from "react";
class App extends React.Component {
  state = {
    text: "",
    btn: "Liczba"
  };

  handleClick = () => {
    const number = Math.floor(Math.random() * 10);
    this.setState({
      text: this.state.text + number
    });
    // alert(this.state.text);
  };

  render() {
    const btnNmae = "stworz liczbe";
    return (
      <React.Fragment>
        <button onClick={this.handleClick.bind(this)}>
          {this.props.btnTitle}
          {/* this.props.btnTitle odnosi sie do props ktore sa w ReactDOM*/}
        </button>

        <button onClick={this.handleClick.bind(this)}>
          {this.state.btn}
          {/* this.state.btn odnosi sie do state */}
        </button>

        <button onClick={this.handleClick.bind(this)}>
          {btnNmae}
          {/* btnNmae odnosi sie do tej funkcji render gdzie jest zadeklarowana*/}
        </button>

        <PanelResult propsDoPrzekazania={this.state.text} />
        {/* nazywamy jak ma sie ma nazywac props do przekazania */}
      </React.Fragment>
    );
  }
}

const PanelResult = props => {
  return <h1>{props.propsDoPrzekazania}</h1>;
  {
    /* odbieramy propsa przez props i nazwa jaka zadeklarowalismy ndla props */
  }
};

ReactDOM.render(
  <App btnTitle="Dodaj cyfre" />,
  document.getElementById("root")
);
