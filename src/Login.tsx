import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import userStore from "./store/userStore";

const Login = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    userStore.login(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          className="form-control"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
});

export default Login;
