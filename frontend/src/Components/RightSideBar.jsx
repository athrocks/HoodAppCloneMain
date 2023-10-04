import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import uesr1 from "../images/user1.png";
import uesr2 from "../images/user2.png";
import uesr3 from "../images/user3.png";
import uesr4 from "../images/user4.png";

export default function RightSideBar() {
  return (
    <div className="RightSideBar">
      <div className="right">
        <div className="search">
          <div className="icon">
            <SearchIcon style={{ color: "white" }} />
          </div>
          <input type="text" placeholder="Search here..." />
        </div>
        <div className="trending">
          <h3>Trending on Hood</h3>
          <div className="trendingSection">
            <div className="sect">
              <TrendingUpIcon />
              <div>Salary Comparison</div>
            </div>
            <div className="sect">
              <TrendingUpIcon />
              <div>Tinder</div>
            </div>
            <div className="sect">
              <TrendingUpIcon />
              <div>World's Darkest Memes 💀☠️</div>
            </div>
          </div>
        </div>
        <div className="popularGroups">
          <h3>Popular Groups</h3>
          <div className="sector">
            <img src={uesr1} alt="" />
            <div className="user">
              <span className="grpName">IT</span>
              <span className="type">College</span>
              <span className="followers">400</span>
            </div>
            <button>Join</button>
          </div>
          <div className="sector">
            <img src={uesr2} alt="" />
            <div className="user">
              <span className="grpName">CS/AI/Ml</span>
              <span className="type">College</span>
              <span className="followers">200</span>
            </div>
            <button>Join</button>
          </div>
          <div className="sector">
            <img src={uesr3} alt="" />
            <div className="user">
              <span className="grpName">DSA</span>
              <span className="type">Corporate</span>
              <span className="followers">500</span>
            </div>
            <button>Join</button>
          </div>
          <div className="sector">
            <img src={uesr4} alt="" />
            <div className="user">
              <span className="grpName">Timepass</span>
              <span className="type">All</span>
              <span className="followers">10,000</span>
            </div>
            <button>Join</button>
          </div>
        </div>
      </div>
    </div>
  );
}
