import React, { useState } from "react";
import "./FeauturedProducts.css";
import red from "../../assets/img/red.png";
import yellow from "../../assets/img/yellow.webp";
import blue from "../../assets/img/blue.webp";
import black from "../../assets/img/black.webp";
import white from "../../assets/img/white.webp";
import pair from "../../assets/img/2_nike.png";

import { Link, useNavigate, useNavigation } from "react-router-dom";
import Button from "../button/Button";

function FeauturedProducts() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(white);
  return (
    <div className="product-section-shoes">
      <h2>Gift Ideas</h2>
      <div className="product-section-shoes-wrapper">
        <div className="product-section-shoes-2">
          <div className="welcome-write-section   trade-section ">
            <div className="welcome-write-section-text">
              <h1>Nike isn't just a brand, it's a statement </h1>
             <Button color="black" text="Shope Now"  textColor="white" ></Button>
            </div>
          </div>
          <img src={pair}></img>
        </div>

        <div className="product-section-shoes-1">
          <div className="">
            <div className="color-selector">
              <span
                onClick={() => setSelectedImage(yellow)}
                className="color-circle color-button-yellow-black"
              ></span>
              <span
                onClick={() => setSelectedImage(blue)}
                className="color-circle color-button-blue-white"
              ></span>
              <span
                onClick={() => setSelectedImage(black)}
                className="color-circle color-button-black-white"
              ></span>
              <span
                onClick={() => setSelectedImage(white)}
                className="color-circle color-button-white-red"
              ></span>
            </div>
          </div>
          <img src={selectedImage} alt="Shoe color selector"></img>
        </div>
      </div>
    </div>
  );
}

export default FeauturedProducts;
