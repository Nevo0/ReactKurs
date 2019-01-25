// imr
// sfc
import React from "react";
import "./UsersList.css";
const UsersList = props => {
  const usersItem = props.users.map(user => {
    {
      console.log(user);
      let title =
        user.name.title.charAt(0).toUpperCase() + user.name.title.slice(1);
      let first =
        user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
      let last =
        user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);

      return (
        <img src={user.picture.large} alt={user.name.last}/>
        <li key={user.login.uuid}>
          <h4>
            {title} {first} {last}
          </h4>
          <p>{user.email}</p>
        </li>
      );
    }
  });

  return <ul>{usersItem}</ul>;
};

export default UsersList;
