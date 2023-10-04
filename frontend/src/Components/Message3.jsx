import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import user3 from "../images/us3.png";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Message3() {
  return (
    <div className="message">
      <div className="left">
        <TrendingUpIcon />
        <img src={user3} alt="" />
      </div>
      <div className="right">
        <p>Trending</p>
        <span>amitbaruah</span>
        <span>Founder and Ceo</span>
        <p>
          After breaking up with my ex after 12 years.. I lost my trust in love.
          She was a gold digger using me for a long time. Now i can't trust
          people who speak well about love. Also there were few girls coming and
          proposing but just because i got ditched so badly. I am not able to
          trust anymore. I also planned not to get married. Just enjoying my
          life by traveling around the world, creating memories, earning lots of
          money and making friends. That's my goal. Even my parents support me
          by saying - "If you don't wanna marry, Just don't".
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
