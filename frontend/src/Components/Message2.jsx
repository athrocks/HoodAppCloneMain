import React from "react";
import user2 from "../images/us2.png";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Message2() {
  return (
    <div className="message">
      <div className="left">
        <TrendingUpIcon />
        <img src={user2} alt="" />
      </div>
      <div className="right">
        <p>Trending</p>
        <span>EvilEthyls</span>
        <span>Engineer</span>
        <p>
          I'm a 22 year old guy. my mother got out of an abusive marriage after
          20 years at the start of this year. she had 2 kids including me. both
          of us siblings wants her to remarry and start living her life in her
          new home. she is a little worried about people. we have assured that
          we can take care of ourselves and we'll be living in our home which is
          our mother's property and will meet her time to time. she wants to but
          hesitating. how should we console her and where should we look for
          someone for her?
        </p>
        <div className="icon">
          <div className="ico">
            <AddCommentIcon style={{ fontSize: "larger" }} />
            <span>117</span>
          </div>
          <div className="ico">
            <ReplayIcon style={{ fontSize: "larger" }} />
            <span>0</span>
          </div>
          <div className="ico">
            <FavoriteBorderIcon style={{ fontSize: "larger" }} />
            <span>55</span>
          </div>
          <div className="ico">
            <VisibilityIcon style={{ fontSize: "larger" }} />
            <span>6012</span>
          </div>
        </div>
      </div>
    </div>
  );
}
