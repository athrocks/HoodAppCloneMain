import React from "react";
import logo2 from "../images/logo2.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <Link to={'/'}><img src={logo2} alt="" /></Link>
      <Link to={'/login'}><button>Sign In</button></Link>
    </div>
  );
}
