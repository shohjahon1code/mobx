import { observer } from "mobx-react";
import { useState } from "react";
import userStore from "./store/userStore";

const Signup = observer(() => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    userStore.signup(username, password, email);
  };

  return (
    <form onSubmit={handleSignup}>
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
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Signup
      </button>
    </form>
  );
});

export default Signup;
