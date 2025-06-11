import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  let [username,setUsername] = useState("");
  let [password,setPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("call00");
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
  
    try {
      let response = await fetch("http://localhost:8080/users/login", {
        method: "POST",
        body: formData
      
      });
  
      let result = await response.text(); // ✅ Use text() since backend returns a string
      console.log("Login result:", result);
  
      if (result != 0) {
        localStorage.setItem("user_id",result);
        
        window.location.href = "http://localhost:5173/home"; // ✅ Fixed URL format
      } 
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  
  return (
    <div className="container">
      <div className="left-section">
        <h1 className="app-name">Infinity Connect</h1>
        <p className="tagline">Represent Limitless Connections</p>
      </div>

      <div className="right-section">
        <form className="login-box" onSubmit={submit}>
        <input type="text" 
            name="username" 
            placeholder="Enter your username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            autoComplete="username"  // ✅ Helps browser autofill username
            required 
            />
        <input type="password" 
            name="password" 
            placeholder="Enter your password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            autoComplete="current-password"  // ✅ Fix: Added autocomplete
            required 
            />
            <button className="login-btn" type="submit">Login</button>
            <button className="signup-btn">
                <Link to="/register"> Create New Account </Link>
            </button>
            <hr />
        </form>
      </div>
    </div>
  );
}

export default Login;