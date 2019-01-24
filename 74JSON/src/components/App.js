import React, { Component } from "react";
// imrc
import "./App.css";
import Word from "./Word";

class App extends Component {
  state = {
    words: [],
    isLoaded: false
  };
  componentDidMount() {
    // setTimeout(this.fetchData, 3000);
    fetch("data/words.json")
      .then(result => result.json())
      .then(data => {
        console.log(data);

        this.setState({
          words: data.words,
          isLoaded: !this.state.isLoaded
        });
      });
  }

  // fetchData = () => {
  //   fetch("data/words.json")
  //     .then(result => result.json())
  //     .then(data => {
  //       console.log(data);

  //       this.setState({
  //         words: data.words,
  //         isLoaded: !this.state.isLoaded
  //       });
  //     });
  // };

  render() {
    const words = this.state.words.map(word => (
      <Word key={word.id} en={word.en} pl={word.pl} />
    ));

    return <ul>{this.state.isLoaded ? words : "Wczytuje dane"}</ul>;
  }
}

export default App;
