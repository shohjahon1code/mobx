import React from "react";
import { observer } from "mobx-react-lite";
import userStore from "./store/userStore";
import Login from "./Login";
import Signup from "./Signup";

const Auth = observer(() => {
  return (
    <div>
      {userStore.isAuthenticated ? (
        <p>Welcome {userStore.username}!</p>
      ) : (
        <>
          {/* <Login /> */}
          <Signup />
        </>
      )}
    </div>
  );
});

export default Auth;
