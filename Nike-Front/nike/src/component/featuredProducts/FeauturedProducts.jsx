import React from "react";
import "./FeauturedProducts.css";
import red from "../../assets/img/red.png";
import yellow from "../../assets/img/yellow.png";
import { Link, useNavigate, useNavigation } from "react-router-dom";

function FeauturedProducts() {
  const navigate = useNavigate();
  return (
    <div className="product-section-shoes">
    <h2>Gift Ideas</h2>
      <div className="product-section-shoes-2">
              <div className="welcome-write-section   trade-section ">
        <h4>Trade in offer And prices</h4>
        <p>
          Write detailed and enticing descriptions of the shoes that you sell on
        </p>
        <button>Shop Now</button>
      </div>
        <img src={red}></img>
      </div>

      <div className="product-section-shoes-1">
              <div className="welcome-write-section   trade-section ">
        <h4>Trade in offer And prices</h4>
        <p>
          Write detailed and enticing descriptions of the shoes that you sell on
        </p>
        <button>Shop Now</button>
      </div>
        <img src={yellow}></img>
      </div>
    </div>
  );
}

export default FeauturedProducts;
