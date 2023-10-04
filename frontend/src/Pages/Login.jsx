import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hood</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="enter email" />
          <input type="password" placeholder="enter password" />
          <button><Link to={'/main'} style={{color:'white', textDecoration:'none'}}>Sign In</Link></button>
          <p>
            You don't have an account? <Link to={"/register"}>Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
