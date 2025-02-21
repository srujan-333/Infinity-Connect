import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="app-name">Infinity Connect</h1>
        <p className="tagline">Represent Limitless Connections</p>
      </div>

      <div className="right-section">
        <div className="login-box">
          <input type="text" placeholder="Email address or phone number" />
          <input type="password" placeholder="Password" />
          <button className="login-btn">Log in</button>
          <a href="/" className="forgot-link">Forgotten password?</a>
          <hr />
          <button className="signup-btn">
          <Link to="/register"> Create New Account </Link>
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Login;