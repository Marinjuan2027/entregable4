import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const UsersForm = ({ getUser, userSelected, deselectUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [birthday, setBirthay] = useState("");

  useEffect(() => {
    if (userSelected !== null) {
      setEmail(userSelected.email);
      setPassword(userSelected.password);
      setFirstName(userSelected.first_name);
      setLastName(userSelected.last_name);
      setBirthay(userSelected.birthday);
    }
  }, [userSelected]);

  const submit = (e) => {
    e.preventDefault();

    const userForm = {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name,
      birthday: birthday,
    };
    if (userSelected !== null) {
      axios
        .put(
          `https://users-crud1.herokuapp.com/users/${userSelected.id}/`,
          userForm
        )
        .then(() => {
          getUser();

          reset();
          deselectUser();
        });
    } else {
      axios
        .post("https://users-crud1.herokuapp.com/users/", userForm)
        .then(() => {
          getUser(), reset();
        })

        .catch((error) => console.log(error.response));
    }
  };

  const reset = () => {
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setBirthay("");
  };

  const clear = () => {
    reset();
    deselectUser();
  };
  return (
    <form className="padre" onSubmit={submit}>
      <div className="input-container">
        <div>
          <label htmlFor="first_name"> first name </label>
          <input
            type="text"
            id="first_name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="last_name">last name </label>
          <input
            type="text"
            id="last_name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="password">Password </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label htmlFor="birthday">Birthday </label>
          <input
            type="date"
            id="birthday"
            value={birthday}
            onChange={(e) => setBirthay(e.target.value)}
          />
        </div>
        <br />
        <div>
          <button className="created">
            {userSelected !== null ? "Update" : "Create"}{" "}
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
          {userSelected !== null && (
            <button className="clear" type="button" onClick={clear}>
              <i class="fa-solid fa-delete-left"></i> Remove
            </button>
          )}
        </div>
      </div>
    </form>
  );
};

export default UsersForm;
