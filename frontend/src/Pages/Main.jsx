import React from "react";
import Navbar from "../Components/Navbar";
import LeftSideBar from "../Components/LeftSideBar";
import RightSideBar from "../Components/RightSideBar";
import MainContent from "../Components/MainContent";


export default function Main() {
  return (
    <div className="main">
      <div className="mainPage">
        <Navbar/>
        <div className="Content">
            <LeftSideBar/>
            <MainContent/>
            <RightSideBar/>
        </div>
      </div>
    </div>
  );
}
