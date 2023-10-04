import React from "react";
import logo from "../images/logo3.svg";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import GifIcon from "@mui/icons-material/Gif";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import AddIcon from "@mui/icons-material/Add";
import Message1 from "./Message1";
import Message2 from "./Message2";
import Message3 from "./Message3";

export default function MainContent() {
  return (
    <div className="mainContent">
      <div className="navBar">
        <div className="navupper">
          <img src={logo} alt="" />
          <input type="text" placeholder="Write fearlessly..." />
        </div>
        <div className="navlower">
          <div className="icons">
            <div>
              <InsertPhotoIcon />
            </div>
            <div>
              <GifIcon />
            </div>
            <div>
              <PlaylistAddIcon />
            </div>
            <div>
              <AddIcon />
            </div>
          </div>
          <button>Post</button>
        </div>
      </div>
      <div className="main">
        <Message1 />
        <Message2 />
        <Message3 />
      </div>
    </div>
  );
}
