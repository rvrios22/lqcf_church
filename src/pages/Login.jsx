import React, { useState } from "react";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("signed in");
    } catch (error) {
      console.error(error);
    } finally {
      setPassword("");
      setEmail("");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log("signed out");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="header">Login</h1>
      <label htmlFor="user-email">Email: </label>
      <input
        type="text"
        id="user-email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="user-pass">Password: </label>
      <input
        type="password"
        id="user-pass"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={() => handleSignIn()}>Log In</button>
      <button onClick={() => handleSignOut()}>Log Out</button>
    </div>
  );
}

export default Login;
