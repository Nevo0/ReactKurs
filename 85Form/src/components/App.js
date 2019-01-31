import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    check: "",
    accept: false
  };

  handleChange = e => {
    // console.log(e.target.name);
    // console.log(e.target.type);
    const name = e.target.name;
    const type = e.target.type;
    console.log(type);
    if (type === "text" || type === "password" || type === "email") {
      const value = e.target.value;

      this.setState({
        [name]: value
        // jezeli bez to odwolujemy sie do walściwosci
        // jezeli urzywamy w tym miejscu misu byc w nawiasie
      });
    } else if (type === "checkbox") {
      const checked = e.target.checked;
      // console.log(checked);
      this.setState({
        [name]: checked
      });
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("dziala");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          {/* dodajemy noValidate aby nie bylo walidacju w formularzu */}

          <label htmlFor="user">
            Twoje imię:
            <input
              type="text"
              id="user"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {/* dzieki dodani id w inpucie o tej samej nazwie co w labelForm to jeleli klikniemy na napis to bedzie on aktywny */}
          </label>

          <label htmlFor="email">
            Twoje email:
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {/* dzieki dodani id w inpucie o tej samej nazwie co w labelForm to jeleli klikniemy na napis to bedzie on aktywny */}
          </label>

          <label htmlFor="password">
            Twoje haslo:
            <input
              type="password"
              id="password"
              name="pass"
              value={this.state.pass}
              onChange={this.handleChange}
            />
            {/* dzieki dodani id w inpucie o tej samej nazwie co w labelForm to jeleli klikniemy na napis to bedzie on aktywny */}
          </label>

          <label htmlFor="accept">
            <input
              type="checkbox"
              name="accept"
              id="accept"
              checked={this.state.accept}
              onChange={this.handleChange}
            />
            Wyrazam zgode wszelaka
          </label>

          <button>Wyslij</button>
        </form>
      </div>
    );
  }
}

export default App;
