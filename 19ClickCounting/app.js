class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      massegeIsActive: false
    };
    this.handleMassageButton = this.handleMassageButton.bind(this);
    {
      /**towrzymy nową metode do ktorej przypisujemy to metode która jest ponizej i dodatkowo baindowanie*/
    }
  }
  handleMassageButton() {
    this.setState({
      massegeIsActive: !this.state.massegeIsActive
    });
  }

  render() {
    console.log(this.state.massegeIsActive);

    const text =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt non dolore veniam eaque, rerum labore soluta, aliquam vel ab molestias enim et? Error nobis adipisci commodi quidem nihil vero sed?";
    return (
      <React.Fragment>
        <button onClick={this.handleMassageButton}>
          {this.state.massegeIsActive ? " Ukryj " : " Pokaż "}
        </button>
        <p> {this.state.massegeIsActive && text}</p>
        {/* jeżeli massegeIsActive jest false to zwraca null jezeli natomiast  jest true to zwraca to co jest po prawej stronie w tym przypadku nasz teks */}
        <p> {!this.state.massegeIsActive ? " Ukryj " : text}</p>

        {this.state.massegeIsActive ? <p>{text}</p> : null}

        {this.state.massegeIsActive && <p>{text}</p>}
      </React.Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
