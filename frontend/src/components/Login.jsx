import React, { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const { setUserName } = useContext(UserContext);

  const submitHandler = (event) => {
    event.preventDefault();
    setUserName(username);
    setUsername("");
  };

  const changeText = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div>
      <form className="login" onSubmit={submitHandler}>
        <input
          className="inputField"
          type="text"
          name="username"
          id="username"
          placeholder="Enter a username"
          required
          value={username}
          onChange={changeText}
        />
        <button className="loginBtn" type="submit">
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default Login;
