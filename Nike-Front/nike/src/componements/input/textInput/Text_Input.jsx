import React from "react";
import "./Text_Input.css";
function Text_Input(props) {
  const { text, placeholder } = props;
  return (
    <div className="login-input text">
      <label>{text}<span>*</span>  </label>
      <input type="text" placeholder={placeholder}  />
    </div>
  );
}

export default Text_Input;
