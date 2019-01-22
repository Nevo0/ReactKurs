class Counter extends React.Component {
  state = { result: 1, ratio: 2 };
  handleMultiplication = () => {
    this.setState(state => ({
      result: state.result * state.ratio
    }));
  };
  componentDidUpdate = () => {
    if (this.state.result >= 1000 && this.state.ratio === 2) {
      //sprawdzamy czy 1000 i jak przekroczy 1000 to wejdzie w petle a dzieku temu drogiemu warunkowi nie wejdzie do niej
      this.setState(state => ({
        ratio: 0.5
      }));
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      //sprawdzamy czy 1 i jak przekroczy 1000 to wejdzie w petle a dzieku temu drogiemu warunkowi nie wejdzie do niej
      this.setState(state => ({
        ratio: 2
      }));
    }
    console.log(this.state.ratio);
  };

  asd = () => {
    this.setState(state => ({
      result: state.result * state.ratio
    }));
    // console.log(this.state);
  };
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          quas libero accusantium dolor. Facere culpa, optio delectus eaque
          repellat quia mollitia. Incidunt dolorum error esse voluptate nesciunt
          ullam totam veniam!
        </p>
        <button onClick={this.handleMultiplication}>{`Pomnóż przez ${
          this.state.ratio
        }`}</button>
        <h1>Wynik: {this.state.result}</h1>
      </div>
    );
  }
}
