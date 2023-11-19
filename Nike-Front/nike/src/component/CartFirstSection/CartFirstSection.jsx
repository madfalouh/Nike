import React, { useRef } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import f1 from '../../assets/img/blog/b5.jpg'
import { useDispatch, useSelector } from "react-redux";

function CartFirstSection({props}) {


console.log(props);


  const CartItems = useSelector((state) => state.CartItem);
  
  const { cartLoading, cartItems } = CartItems;

  console.log(cartItems?.[0]?.cartItems?.products);

  const dispatch = useDispatch()

const inputRef = useRef(null)


const changeCart = (input)=>{

cartItems[0].cartItems.products[props.index].qty = input;
dispatch(updateCart(cartItems?.[0]?._id   , cartItems[0].cartItems.products     ))

}


const removeItemFromCart = ()=>{


cartItems[0].cartItems.products.splice(props.index , 1)
dispatch(updateCart(cartItems?.[0]?._id   , cartItems[0].cartItems.products     ))

}


  return (
    <>
      <div className="cart-info-section">
        <img src={f1}></img>

        <div className="info-section">
          <div className="cart-info-title">
            {" "}
            <h3>Lorem ipsum dolor</h3>{" "}
          </div>

          <div className="cart-info-size">
            {" "}
            <h5>Size : 35m</h5>{" "}
          </div>

          <div className="cart-info-color">
            {" "}
            <h5>Color : Grey</h5>{" "}
          </div>
          <div className="left-stock" > 2 Left instock  </div>
          <div className="cart-info-remove">
            {" "}
            <div className="cart-remove-section"   >
              {" "}
              <DeleteIcon></DeleteIcon> <h5   onClick={removeItemFromCart}   >Remove</h5>{" "}
              <div className="height-line"></div>{" "}
              <FavoriteIcon style={{ fontSize: "1.4rem" }}></FavoriteIcon>{" "}
              <h5>Move to wishlist</h5>{" "}
            </div>{" "}
          </div>
        </div>
      </div>

      <div className="cart-item-price">
        <h5>Price: $100</h5>
      </div>

      <div className="cart-qty-section">
        <div className="cart-wrapper   ">
          <div className="qt-box   cart-box ">
            {" "}
            <input
              type={"text"}
              value={props?.qty}
              ref={inputRef}
              maxLength={3}
              min={1}
              max={10}
              onChange={() => {}}
            />{" "}
            <div className="shooping-button-wrapper   cart-buttons ">
              <button className="plus button"   onClick={ ()=>{   if( true ){  inputRef.current.value = Number(inputRef.current.value) +1 ;  changeCart (Number(inputRef.current.value))  ;   }    }    }  >+</button>{" "}
              <button className="minus button "  onClick={ ()=>{  if(Number(inputRef.current.value !=1  )){  inputRef.current.value = Number(inputRef.current.value) -1 }  }} >-</button>
            </div>{" "}
          </div>{" "}
        </div>
      </div>
 </>
  );
}

export default CartFirstSection;

//Number(inputRef.current.value <10 