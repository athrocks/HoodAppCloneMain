import React from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import user1 from "../images/us1.png";
import AddCommentIcon from "@mui/icons-material/AddComment";
import ReplayIcon from "@mui/icons-material/Replay";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Message1() {
  return (
    <div className="message">
      <div className="left">
        <TrendingUpIcon />
        <img src={user1} alt="" />
      </div>
      <div className="right">
        <p>Trending</p>
        <span>veintuckers</span>
        <span>Student</span>
        <p>
          Met a Girl at college, we had same professional liking so talked about
          that a lot we became friends who call and meet regularly. No feeling
          just friends she had a boyfriend and I was single she would say about
          her boyfriend to me and i would listen. Not always just sometimes but
          for some or the other reason I just hated that guy. This went on for a
          year we became close friends. I never gave her any advise in her
          relationship. But somehow their relationship broke and she was single
          again. 2 months before all these happened I started sensing something
          special towards her seems like I could spend lot of time with her
          later I realised I had feelings for her. But too scared I didn't
          confess that, we talked and met regularly but couldn't confess to
          her...........what should I do?
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
