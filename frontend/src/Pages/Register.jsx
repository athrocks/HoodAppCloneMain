import React from "react";
import Img1 from "../images/Img1.png";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Hood</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="enter name" />
          <input type="email" placeholder="enter email" />
          <input type="password" placeholder="enter password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file" style={{ cursor: "pointer" }}>
            <img src={Img1} alt="img" />
            <span>Add an avatar</span>
          </label>
          <button ><Link to={'/main'} style={{color:'white', textDecoration:'none'}}>Sign Up</Link></button>
          <p>You do have an account? <Link to={'/login'}>Login</Link></p>
        </form>
      </div>
    </div>
  );
}
 