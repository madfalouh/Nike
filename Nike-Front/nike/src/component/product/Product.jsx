import React from "react";
import productimg7 from "../../assets/img/products/n8.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";
import "./product.css";
function Product({ props }) {
  console.log(props.rating);
  return (
    <div className="products-container-page">
      <div className="product-wrapper-products">
        <div className="product-container">
          <div className="product">
            <img src={productimg7}></img>
            <div className="des">
              <span>{props.brand}</span>
              <h5>{props.name}</h5>
              <div className="star">
                {(() => {
                  const stars = [];
                  for (let i = 0; i < props.rating; i++) {
                    stars.push(<StarIcon key={i} />);
                  }
                  return stars;
                })()}

                <span>{props.numReviews} reviews</span>
              </div>
            </div>
            <div className="price-wrapper">
              <h4>{props.price}$</h4>
              <a href="#">
                {" "}
                <ShoppingCartIcon className="cart-now"></ShoppingCartIcon>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
