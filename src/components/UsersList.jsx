import React from "react";
import axios from "axios";

const UsersList = ({ users, selectUser, deleteUser }) => {
  return (
    <div className="contenedor-padre">
      <ul className="card-container">
        {users.map((user) => (
          <li key={user.id} className="users-list">
            <div>
              <b>First name: </b>
              {user.first_name} {user.last_name}
            </div>
            <br />
            <div>
              <b>Email: </b>
              {user.email}
            </div>
            <br />
            <div>
              <b>Password: </b>
              {user.password}
            </div>
            <br />
            <div>
              <b>Birthday: </b>
              {user.birthday}
            </div>
            <br />
            <button className="clear" onClick={() => selectUser(user)}>
              <i class="fa-solid fa-pen-to-square"></i> Edit
            </button>
            <button className="edit" onClick={() => deleteUser(user.id)}>
              <i class="fa-solid fa-delete-left"></i> Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
