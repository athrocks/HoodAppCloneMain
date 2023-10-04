import React from "react";
import feeds from "../images/feed.svg";
import group from "../images/groups.svg";
import topic from "../images/Topics.svg";
import invite from "../images/Invitefriends.svg";
import setting from "../images/Settings.svg";
import { Link } from "react-router-dom";

export default function LeftSideBar() {
  return (
    <div className="leftSideBar">
      <div className="tabs">
        <div className="tabes">
          <img src={feeds} alt="" />
          <span><Link to={'/stores'} style={{color:'white', textDecoration:'none'}}>Feeds</Link></span>
        </div>
        <div className="tabes">
          <img src={group} alt="" />
          <span><Link to={'/stores'} style={{color:'white', textDecoration:'none'}}>Groups</Link></span>
        </div>
        <div className="tabes">
          <img src={topic} alt="" />
          <span><Link to={'/stores'} style={{color:'white', textDecoration:'none'}}>Topics</Link></span>
        </div>
        <div className="tabes">
          <img src={invite} alt="" />
          <span><Link to={'/stores'} style={{color:'white', textDecoration:'none'}}>Invite</Link></span>
        </div>
        <div className="tabes">
          <img src={setting} alt="" />
          <span><Link to={'/stores'} style={{color:'white', textDecoration:'none'}}>Settings</Link></span>
        </div>
      </div>
      <button>Create Group</button>
    </div>
  );
}
