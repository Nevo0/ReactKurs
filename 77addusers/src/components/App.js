import React, { Component } from "react";
import "./App.css";
import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = { users: [] };

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
          const user = data.results;
          this.setState(prevState => ({
            users: prevState.users.concat(user)
          }));
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
        {users.length > 0 ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
