// imr
// sfc
import React from "react";
import "./UsersList.css";
const UsersList = props => {
  console.log(props.users);

  return (
    <ul>
      <li>{props.users}</li>
    </ul>
  );
};

export default UsersList;
