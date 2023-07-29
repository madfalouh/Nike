import React, { useState } from 'react'
import Eye_Open from '../../../assets/icon/eyeOpen/Eye_Open';
import Eye_Closed from '../../../assets/icon/eyeClosed/Eye_Closed';
  const eyeOpen = <Eye_Open></Eye_Open>;

  const eyClose = <Eye_Closed></Eye_Closed>;


function Text_Password() {

  const [show, setShow] = useState(false);
  const [showIcon, setShowIcon] = useState(eyeOpen);



  const handleShow = () => {
    setShow((val) => !val);
  };

  return (
          <div className="login-input password">
            <label>Password<span>*</span></label>
            <div className="input-wrapper">
              <input
                type={show ? "text" : "password"}
                placeholder="Min. 8 characters"
              />
              <div className="eye" onClick={handleShow}>
                {" "}
                {!show ? eyeOpen : eyClose}{" "}
              </div>
            </div>
          </div>
  )
}

export default Text_Password
