import React from "react";

const Login = () => {
  return (
    <div>
      <form className="login" action="">
        <input
          className="inputField"
          type="text"
          name="username"
          id="username"
          placeholder="Enter a username"
          required
        />
        <button className="loginBtn" type="submit">
          Sign-In
        </button>
      </form>
    </div>
  );
};

export default Login;
