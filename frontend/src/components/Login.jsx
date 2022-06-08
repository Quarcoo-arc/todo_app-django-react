import React from "react";

const Login = () => {
  return (
    <div>
      <h2>Sign-In</h2>
      <form action="">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="username"
          required
        />
        <button type="submit">Sign-In</button>
      </form>
    </div>
  );
};

export default Login;
