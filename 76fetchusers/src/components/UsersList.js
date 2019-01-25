// imr
// sfc
import React from "react";
import "./UsersList.css";
const UsersList = props => {
  const usersItem = props.users.map(user => {
    {
      console.log(user.login.uuid);
      let title =
        user.name.title.charAt(0).toUpperCase() + user.name.title.slice(1);
      let first =
        user.name.first.charAt(0).toUpperCase() + user.name.first.slice(1);
      let last =
        user.name.last.charAt(0).toUpperCase() + user.name.last.slice(1);

      return (
        <li key={user.login.uuid}>
          {title} {first} {last}
        </li>
      );
    }
  });

  return <ul>{usersItem}</ul>;
};

export default UsersList;
