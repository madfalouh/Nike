import React from "react";
import './Button.css'
function Button(props) {
  const { color, Icon, text , textColor } = props;

  return (
    <button className={`login-button-modified color-${color}`}>
     { Icon &&  <Icon></Icon> }
      <p className={`text-color-${textColor}`}  >{text}</p>
    </button>
  );
}

export default Button;
