import React from "react";
import logo from "../images/logo4.svg";
import appStore from '../images/appStore.svg';
import playStroe from '../images/playStore.svg';
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="compulsorySignup">
      <Link to={'/'}><img src={logo} alt="" /></Link>
      <h1>Hood is better on the app</h1>
      <p>
        Never miss a post. Open this in the hood app to get the full experience.
      </p>
      <div className="logoss">
        <img src={appStore} alt="" />
        <img src={playStroe} alt="" />
      </div>
    </div>
  );
}
