import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

class App extends Component {
  state = { users: null };

  handleDataFetch = () => {
    console.log("click");
  };

  render() {
    const users = this.state.users;
    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
