import React from "react";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UserList = (props) => {
  // props.users.map() map berfungsi untuk membuat mapping array data ke array jsx elements yang dirender oleh DOM
  return (
    //dibungkuss dengan Card
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
