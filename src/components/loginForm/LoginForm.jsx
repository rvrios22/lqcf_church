import React, { useRef, useState } from "react";
import Loader from "../loader/Loader";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./loginForm.css";

function LoginForm() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorItem, setErrorItem] = useState("");
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();

  const focusOnInput = (ref) => {
    if (ref.current) {
      ref.current.focus();
    }
  };

  const loginError = (err) => {
    const code = err.code.split("/")[1];
    switch (code) {
      case "user-not-found":
        setEmailError(true);
        setErrorItem("email");
        setLogin({ ...login, email: "" });
        focusOnInput(emailRef);
        break;
      case "wrong-password":
        setPasswordError(true);
        setErrorItem("password");
        setLogin({ ...login, password: "" });
        focusOnInput(passwordRef);
        break;
      default:
        alert("Something went wrong, please try again");
    }
  };

  const handleSignIn = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, login.email, login.password);
      setPasswordError(false);
      setEmailError(false);
      setLogin({
        email: "",
        password: "",
      });
    } catch (error) {
      loginError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      navigate(0);
    } catch (error) {
      alert(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setLogin({
      ...login,
      email: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setLogin({
      ...login,
      password: e.target.value,
    });
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
          className={emailError ? "input-error" : ""}
          placeholder="Email"
          onChange={handleEmailChange}
          ref={emailRef}
          value={login.email}
        />
        <label htmlFor="user-pass">Password: </label>
        <input
          type="password"
          id="user-pass"
          className={passwordError ? "input-error" : ""}
          placeholder="Password"
          onChange={handlePasswordChange}
          ref={passwordRef}
          value={login.password}
        />
        <button className="login-form-button" onClick={() => handleSignIn()}>
          Log In
        </button>
        <button className="login-form-button" onClick={() => handleSignOut()}>
          Log Out
        </button>
      </div>
      {emailError || passwordError ? (
        <div className="login-error-message">
          <p className="general-text">Oops, your {errorItem} is incorrect</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LoginForm;
