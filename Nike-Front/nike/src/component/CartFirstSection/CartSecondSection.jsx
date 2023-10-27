import React from 'react'

import pay from '../../assets/img/pay/pay.png'




function CartSecondSection( {price} ) {

  
return (
    <>
              <div className="cart-second-section-title">Cart Totals</div>

        <div className="cart-info-cart">
          <div className="cart-second-subtotal">
            {" "}
            <h5>Subtotal</h5> <h5>300</h5>{" "}
          </div>

          <div className="cart-second-shipping">
            {" "}
            <h5>Shipping</h5>
            <div className="raduiwrapper">
              <label>
                <input
                  type="radio"
                  class="radio-inline"
                  name="radios"
                  value=""
                />
                <span class="outside">
                  <span class="inside"></span>
                </span>
                Free shipping
              </label>
              <label>
                <input
                  type="radio"
                  class="radio-inline"
                  name="radios"
                  value=""
                />
                <span class="outside">
                  <span class="inside"></span>
                </span>
                Extra shipping :15$
              </label>
              <label>
                <input
                  type="radio"
                  class="radio-inline"
                  name="radios"
                  value=""
                />
                <span class="outside">
                  <span class="inside"></span>
                </span>
                Pickup
              </label>
            </div>
          </div>

          <div className="cart-second-total">
            {" "}
            <h5>Total</h5> <h5>315$</h5>{" "}
          </div>

          <button className="cart-info-button">Proceed to ckeckout</button>
        </div>
        <img src={pay}></img>
    </>
  )
}

export default CartSecondSection
