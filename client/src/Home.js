import React from "react";
import "./App.css";
import Graylogo from "./images/GRAY.png";
import OpenNow from "./images/OpenNow.png";
import Phone from "./images/phone.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="background">
      <div className="title">
        <img src={Graylogo} style={{ height: 30, width: 33 }} />
        <div className="companyName">G.R.A.Y GROUP</div>
      </div>
      <div className="backgroundTwo">
        <div className="openNowWrapper">
          <div className="stackText">
            <div className="ShopLocal">SHOP LOCAL</div>
            <div className="findBusinesses">Find Local Businesses Near you</div>
          </div>
          <img src={OpenNow} style={{ height: 230, width: 350 }} />
        </div>
      </div>
      <div className="backgroundThree">
        <img src={Phone} style={{ height: 150, width: 225 }} />
        <div className="stackTextTwo">
          <div className="enterLocation">1. Enter Your Location</div>
          <div className="enterLocation">2. Type In What Food You Want</div>
        </div>
      </div>
      <div className="backgroundFour">
        <Link className="button" to="/Map">
          TRY NOW
        </Link>
      </div>
    </div>
  );
}

export default Home;
