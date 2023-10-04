import React from "react";
import EastIcon from '@mui/icons-material/East';
import appStore from '../images/appStore.svg';
import playStroe from '../images/playStore.svg';
import phone from '../images/phone.png';
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home2">
        <div className="logo"></div>
        <div className="section">
          <div className="left">
            <div className="Logo"></div>
            <h1>A new-age pseudonymous social network</h1>
            <h4>Wear a mask, express yourself fearlessly!</h4>
            <Link to={'/main'}><button>Go to Feed <EastIcon/></button></Link>
            <div className="stores">
              <img src={appStore} alt="" />
              <img src={playStroe} alt="" />
            </div>
          </div>
          <div className="right">
            <img src={phone} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
