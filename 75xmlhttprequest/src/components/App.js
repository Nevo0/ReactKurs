import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { users: [] };

  componentDidMount() {
    this.requestData();
  }
  requestData = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
    // XMLHttpRequest
    xhr.onload = () => {
      console.log(xhr.response);
      console.log(typeof xhr.response);
      const users = JSON.parse(xhr.response);
      console.log(users);
      console.log(typeof users);
      this.setState({ users });
    };
    xhr.send(null);
  };

  render() {
    const users = this.state.users.map(user => (
      <div key={user.id}>
        <h4>{user.name}</h4>
        <p>
          {user.address.street}, {user.address.city}
        </p>
      </div>
    ));

    return <div>{users}</div>;
  }
}

export default App;
