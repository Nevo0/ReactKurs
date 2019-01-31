import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    pass: "",
    check: "",
    accept: false,
    massage: "",

    errors: {
      username: false,
      email: false,
      pass: false,
      accept: false
    }
  };

  massages = {
    username_incorrect:
      "Nazwa musi byc dłuższa niż 10 znaków i nie może zawierać spacji",
    email_incorrect: `Brak @ w emaili`,
    pass_incorrect: "Hasło musi zawierać minimum 8 znaków",
    accept_incorrect: " Nie potwierdzona zgoda"
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
  formValidation = () => {
    // console.log("formValidation");

    let username = false;
    let emial = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length >= 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      emial = true;
    }
    if (this.state.pass.length == 8) {
      password = true;
    }
    if (this.state.accept === true) {
      accept = true;
    }
    if (username && emial && password && accept) {
      correct = true;
    }
    return {
      username,
      emial,
      password,
      accept,
      correct
    };
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log("handleSubmit");

    const validation = this.formValidation();

    // console.log(validation);

    if (validation.correct) {
      // restartowanie wszystkiego
      this.setState({
        username: "",
        email: "",
        pass: "",
        check: "",
        accept: false,
        massage: "Formularz został wysłany",

        errors: {
          username: false,
          email: false,
          pass: false,
          accept: false
        }
      });
      console.log("Formularz wysłany");
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.emial,
          pass: !validation.password,
          accept: !validation.accept
        }
      });
    }
    // console.log("dziala");
  };

  componentDidUpdate() {
    if (this.state.massage !== "") {
      setTimeout(
        () =>
          this.setState({
            massage: ""
          }),
        3000
      );
    }
  }

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
            {this.state.errors.username && (
              <span>{this.massages.username_incorrect}</span>
            )}
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
            {this.state.errors.email && (
              <span>{this.massages.email_incorrect}</span>
            )}
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
            {this.state.errors.pass && (
              <span>{this.massages.pass_incorrect}</span>
            )}
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
            {this.state.errors.accept && (
              <span>{this.massages.accept_incorrect}</span>
            )}
          </label>

          <button>Wyslij</button>
        </form>
        {this.state.massage !== "" && <div>{this.state.massage}</div>}
      </div>
    );
  }
}

export default App;
