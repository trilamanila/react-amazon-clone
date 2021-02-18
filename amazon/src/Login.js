import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = e => {
    e.preventDefault();

    // firebase login auth
  };

  const register = e => {
    e.preventDefault();

    // firebase login auth
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG3.png"
        />
      </Link>

      <div className="login__container">
        <h1>Sign-In</h1>

        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="login__signInButton">Sign-In</button>
        </form>

        <p>
          By signing-in you agree to Amazon's Clone Condition of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-based Ads Notice
        </p>

        <button className="login__registerButton">Create Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
