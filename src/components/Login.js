import React, { useState } from "react";
import "./Login.css";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError("Username and password fields are required.");
      return;
    }

    handleLogin(username, password);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      {error && <div className="alert">{error}</div>}
      <b>
        <label>
          Username:
          <input
            type="text"
            value={username}
            placeholder="Enter your username"
            style={{ marginLeft: "0.5rem" }}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </b>
      <br />
      <b>
        <label>
          Password:
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            style={{ marginLeft: "0.5rem" }}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </b>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
