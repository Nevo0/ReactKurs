import React, { Component } from "react";
// imrc
import "./App.css";

const data = [
  { id: 1, title: `Wiadomość 1`, body: `Zawartość wiadomości numer 1` }
];

setInterval(() => {
  //  dodaje do tablicy data co 10 s kolejny obiekt z danymi

  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość ${index}`,
    body: `Zawartość wiadomości numer ${index}`
  });
}, 10000);

//cc
class App extends Component {
  state = { comments: [...data] };

  getData = () => {
    // pobiera dane z data i laduje je do state coomments
    if (this.state.comments.length !== data.length) {
      this.setState({
        comments: [...data]
      });
    } else {
      console.log("Dane takie same - Nie aktualizujemy");
    }
  };

  componentDidMount() {
    // aktualizuje state
    this.idInterval = setInterval(this.getData, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.idInterval);
  }

  render() {
    const comments = this.state.comments.map(comment => (
      <div key={comment.id}>
        <h2>{comment.title}</h2>
        <p>{comment.body}</p>
      </div>
    ));
    return <div>{comments.reverse()}</div>;
    // metoda reverse  odwraca kolejnośc tablicy
  }
}

export default App;
