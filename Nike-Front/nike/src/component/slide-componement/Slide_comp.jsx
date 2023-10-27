import React, { useState } from "react";
import "./slide_cmpt.css";
import f1 from "../../assets/img/features/f1.png";
import classNames from "classnames";

function Slide_comp({ props   }) {


  return (
    <div className={ classNames( {"trans" : props.open }  , "slide-container") }>
      <div className="inner-slide-container">
        <div className="slider-title">
          <h2>Shopping Carat</h2>
        </div>
        <div className="iner-slide-wrapper">
          <div className="title-slider">
            <h4>You've got a great taste! </h4>
            <h5>Your <span className="blue-item" >Items</span> added </h5>
          </div>
          <div  className="wrappers-tem"  >
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>

          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="cart-item">
              <img src={f1}></img>
              <div className="cart-desc">
                <div className="cart-item-name">
                  {" "}
                  <h5>Lorem ipsum dolor sit </h5>{" "}
                </div>
                <div className="cart-qty"> qty: 1 price </div>
              </div>
            </div>
          </div>
</div>

<h5>SUBTOTAL : 150$</h5>
<button  style={{cursor:"pointer"}}   className="checkout-nutton" >Checkout</button>
<button  style={{cursor:"pointer"}}  className="checkout-nutton-continue"  >Continue Shopping</button>

        </div>
      </div>
    </div>
  );
}

export default Slide_comp;
