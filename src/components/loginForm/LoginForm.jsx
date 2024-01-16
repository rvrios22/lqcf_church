import React, { useState } from "react";
import Loader from "../loader/Loader";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import "./loginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      console.log("signed in");
    } catch (error) {
      console.error(error);
    } finally {
      setPassword("");
      setEmail("");
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
    } catch (error) {
      console.error(error);
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="general-container">
      {isLoading && <Loader />}
      <h1 className="header">Login</h1>
      <div className="login-form">
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
        <button className="login-form-button" onClick={() => handleSignIn()}>
          Log In
        </button>
        <button className="login-form-button" onClick={() => handleSignOut()}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default LoginForm;
