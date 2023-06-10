import React from "react";

import { auth } from "../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  return (
    <div>
      <h1 className="header">Login/Sign Up</h1>
      <form action="POST">
        <label htmlFor="user-email">Email: </label>
        <input type="text" id="user-email" placeholder="Email" />
        <label htmlFor="user-pass">Password: </label>
        <input type="password" id="user-pass" placeholder="Password" />
      </form>
    </div>
  );
}

export default Login;
