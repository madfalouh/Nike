import React from "react";
import "./Features.css";
import blackNike from "../../assets/img/nikeBlack.png";
import sn1 from "../../assets/img/sn1.png";
import sn2 from "../../assets/img/sn2.png";
import jordan from "../../assets/img/jordan.png";
import converse from "../../assets/img/converse.png";
import golfLogo from "../../assets/img/golf.png";
import snIm from "../../assets/img/nbn.png";
function Features() {
  return (
    <div className="feature">
      <div className="just-do-it-section">
        <img src={blackNike}></img>
      </div>

      <div className="just-do-it-inner-section">
        <div className="sn-details">
          <div className="sn-detail">
            <p className="sn-detail-desc">
              {" "}
              Elevate your game, embrace the journey with Nike.
              <br /> Crafted excellence, enduring passion.
              <br /> Soar with innovation – where legends are made. <br></br>{" "}
              Inspired by the greatest, for the greatest.{" "}
            </p>

            <img className="jordan" src={jordan}></img>
            <img className="converse" src={converse}></img>
            <img className="golf" src={golfLogo}></img>

            <div className="sn2-detail">
              <p>Select size and shop now</p>
              <ul>
                <li> 4K </li>

                <li>5K</li>
                <li>6K</li>
                <li>7K</li>
                <li>8K</li>
                <li>9K</li>
                <li>10K</li>
              </ul>
            </div>

            <div className="sn2-detail-image">
              <img src={snIm}></img>
            </div>
          </div>
        </div>

        <div className="inner-sn">
          <div className="sn1-cont">
            <img src={sn1} className="sn1"></img>
          </div>

          <div className="sn2-cont">
            <img src={sn2} className="sn2"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
