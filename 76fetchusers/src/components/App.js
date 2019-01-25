import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=5";

class App extends Component {
  state = { users: null };

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        console.log(response.ok);

        if (response.ok) {
          return response;
        }
        throw Error("Błą!!!!!!!!");
      })
      .then(response => response.json())
      .then(
        data => {
          // console.log(data);

          this.setState({
            users: data.results
          });
        }
        // console.log(data.results)
      )
      .catch(error => console.log(error));
  };

  render() {
    const users = this.state.users;
    // console.log(users);

    return (
      <div>
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
